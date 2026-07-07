package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.ManutencaoModel;
import com.example.Atividade_em_grupo.Repository.ManutencaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/manutencoes")
@CrossOrigin(origins = "*")
public class ManutencaoController {

    @Autowired
    private ManutencaoRepository repository;

    @GetMapping
    public ResponseEntity<List<ManutencaoModel>> listarTodas() {
        List<ManutencaoModel> manutencoes = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(manutencoes);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@RequestBody ManutencaoModel manutencao) {
        ManutencaoModel salva = repository.save(manutencao);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "Mensagem", "Solicitação de manutenção aberta com sucesso!",
                "id", salva.getId()
        ));
    }
}