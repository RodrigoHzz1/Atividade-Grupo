package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.ProducaoModel;
import com.example.Atividade_em_grupo.Repository.ProducaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/producao")
@CrossOrigin(origins = "*")
public class ProducaoController {

    @Autowired
    private ProducaoRepository repository;

    @GetMapping
    public ResponseEntity<List<ProducaoModel>> listarProducao() {
        List<ProducaoModel> producoes = repository.findAll();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(producoes);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@RequestBody ProducaoModel producao) {
        ProducaoModel salva = repository.save(producao);
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of(
                        "Mensagem", "Dados de produção diária consolidados!",
                        "id", salva.getId()
                ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @RequestBody ProducaoModel novosDados) {
        ProducaoModel producaoExistente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Registro de produção não encontrado com o ID: " + id));

        // Atualiza os campos do registro diário
        producaoExistente.setPlataforma(novosDados.getPlataforma());
        producaoExistente.setBarrisPetroleo(novosDados.getBarrisPetroleo());
        producaoExistente.setMetrosCubicosGas(novosDados.getMetrosCubicosGas());
        producaoExistente.setDataProducao(novosDados.getDataProducao());

        repository.save(producaoExistente);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of(
                        "Mensagem", "Dados de produção atualizados com sucesso!",
                        "id", producaoExistente.getId()
                ));
    }
}