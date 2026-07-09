package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.TripulacaoModel;
import com.example.Atividade_em_grupo.dtos.TripulacaoRequestDTO;
import com.example.Atividade_em_grupo.dtos.TripulacaoResponseDTO;
import com.example.Atividade_em_grupo.service.TripulacaoService;
import com.example.Atividade_em_grupo.Exeception.ResourceNotFoundException;
import com.example.Atividade_em_grupo.Repository.TripulacaoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/tripulacao")
public class TripulacaoController {

    @Autowired
    private TripulacaoService service;

    @Autowired
    private TripulacaoRepository repository;

    @GetMapping
    public ResponseEntity<List<TripulacaoResponseDTO>> listarEscala() {
        List<TripulacaoResponseDTO> escala = service.listarTodas();
        return ResponseEntity.status(HttpStatus.OK).body(escala);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@Valid @RequestBody TripulacaoRequestDTO dto) {
        TripulacaoModel salva = service.salvarTripulacao(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "Mensagem", "Escala de embarque registrada com sucesso!",
                "id", salva.getId()
        ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @Valid @RequestBody TripulacaoRequestDTO dto) {
        TripulacaoModel tripulacaoExistente = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Escala de tripulação não encontrada com o ID: " + id));

        tripulacaoExistente.setNomeFuncionario(dto.getNomeFuncionario());
        tripulacaoExistente.setFuncao(dto.getFuncao());
        tripulacaoExistente.setPlataforma(dto.getPlataforma());
        tripulacaoExistente.setDataInicioConfinamento(dto.getDataInicioConfinamento());
        tripulacaoExistente.setDataFimConfinamento(dto.getDataFimConfinamento());

        repository.save(tripulacaoExistente);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "Mensagem", "Escala de tripulação atualizada com sucesso!",
                "id", tripulacaoExistente.getId()
        ));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deletar(@PathVariable Long id) {
        TripulacaoModel tripulacaoExistente = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Escala não encontrada com o ID: " + id));

        repository.delete(tripulacaoExistente);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "Mensagem", "Membro da tripulação deletado com sucesso!"
        ));
    }
}