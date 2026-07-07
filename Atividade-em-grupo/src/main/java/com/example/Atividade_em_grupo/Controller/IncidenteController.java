package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.IncidenteModel;
import com.example.Atividade_em_grupo.Repository.IncidenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/incidentes")
@CrossOrigin(origins = "*")
public class IncidenteController {

    @Autowired
    private IncidenteRepository repository;

    @GetMapping
    public ResponseEntity<List<IncidenteModel>> listarTodos() {
        List<IncidenteModel> incidentes = repository.findAll();
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(incidentes);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@RequestBody IncidenteModel incidente) {
        IncidenteModel salvo = repository.save(incidente);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(Map.of(
                        "Mensagem", "Incidente operacional registrado com sucesso!",
                        "id", salvo.getId()
                ));
    } // <-- Chave que estava faltando para fechar o método salvar!

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @RequestBody IncidenteModel novosDados) {
        IncidenteModel incidenteExistente = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Incidente não encontrado com o ID: " + id));

        // Atualiza os campos permitidos
        incidenteExistente.setPlataforma(novosDados.getPlataforma());
        incidenteExistente.setData(novosDados.getData());
        incidenteExistente.setHora(novosDados.getHora());
        incidenteExistente.setGravidade(novosDados.getGravidade());
        incidenteExistente.setDescricao(novosDados.getDescricao());
        incidenteExistente.setAcoesImediatas(novosDados.getAcoesImediatas());

        repository.save(incidenteExistente);

        return ResponseEntity
                .status(HttpStatus.OK)
                .body(Map.of(
                        "Mensagem", "Incidente atualizado com sucesso!",
                        "id", incidenteExistente.getId()
                ));
    }
}