package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.TripulacaoModel;
import com.example.Atividade_em_grupo.Repository.TripulacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tripulacao")
@CrossOrigin(origins = "*")
public class TripulacaoController {

    @Autowired
    private TripulacaoRepository repository;

    @GetMapping
    public ResponseEntity<List<TripulacaoModel>> listarEscala() {
        List<TripulacaoModel> escala = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(escala);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@RequestBody TripulacaoModel tripulacao) {
        TripulacaoModel salva = repository.save(tripulacao);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "Mensagem", "Escala de embarque registrada com sucesso!",
                "id", salva.getId()
        ));
    }
}