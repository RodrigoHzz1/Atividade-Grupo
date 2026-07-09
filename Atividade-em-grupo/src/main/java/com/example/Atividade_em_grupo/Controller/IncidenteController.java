package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.IncidenteModel;
import com.example.Atividade_em_grupo.dtos.IncidenteRequestDTO;
import com.example.Atividade_em_grupo.dtos.IncidenteResponseDTO;
import com.example.Atividade_em_grupo.service.IncidenteService;
import com.example.Atividade_em_grupo.Exeception.ResourceNotFoundException;
import com.example.Atividade_em_grupo.Repository.IncidenteRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/incidentes")

public class IncidenteController {

    @Autowired
    private IncidenteService service;

    @Autowired
    private IncidenteRepository repository; // Necessário apenas para o método PUT direto no controller

    @GetMapping
    public ResponseEntity<List<IncidenteResponseDTO>> listarTodos() {
        List<IncidenteResponseDTO> incidentes = service.listarTodos();
        return ResponseEntity.status(HttpStatus.OK).body(incidentes);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@Valid @RequestBody IncidenteRequestDTO dto) {
        IncidenteModel salvo = service.salvarIncidente(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "Mensagem", "Incidente operacional registrado com sucesso!",
                "id", salvo.getId()
        ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @Valid @RequestBody IncidenteRequestDTO dto) {
        IncidenteModel incidenteExistente = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Incidente não encontrado com o ID: " + id));

        incidenteExistente.setPlataforma(dto.getPlataforma());
        incidenteExistente.setData(dto.getData());
        incidenteExistente.setHora(dto.getHora());
        incidenteExistente.setGravidade(dto.getGravidade());
        incidenteExistente.setDescricao(dto.getDescricao());
        incidenteExistente.setAcoesImediatas(dto.getAcoesImediatas());

        repository.save(incidenteExistente);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "Mensagem", "Incidente atualizado com sucesso!",
                "id", incidenteExistente.getId()
        ));
    }
}