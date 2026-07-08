package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.ManutencaoModel;
import com.example.Atividade_em_grupo.dtos.ManutencaoRequestDTO;
import com.example.Atividade_em_grupo.dtos.ManutencaoResponseDTO;
import com.example.Atividade_em_grupo.service.ManutencaoService;
import com.example.Atividade_em_grupo.Exeception.ResourceNotFoundException;
import com.example.Atividade_em_grupo.Repository.ManutencaoRepository;
import jakarta.validation.Valid;
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
    private ManutencaoService service;

    @Autowired
    private ManutencaoRepository repository;

    @GetMapping
    public ResponseEntity<List<ManutencaoResponseDTO>> listarTodas() {
        List<ManutencaoResponseDTO> manutencoes = service.listarTodas();
        return ResponseEntity.status(HttpStatus.OK).body(manutencoes);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@Valid @RequestBody ManutencaoRequestDTO dto) {
        ManutencaoModel salva = service.salvarManutencao(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "Mensagem", "Solicitação de manutenção aberta com sucesso!",
                "id", salva.getId()
        ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @Valid @RequestBody ManutencaoRequestDTO dto) {
        ManutencaoModel manutencaoExistente = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Solicitação de manutenção não encontrada com o ID: " + id));

        manutencaoExistente.setEquipamentoId(dto.getEquipamentoId());
        manutencaoExistente.setNomeEquipamento(dto.getNomeEquipamento());
        manutencaoExistente.setCriticidade(dto.getCriticidade());
        manutencaoExistente.setDescricaoFalha(dto.getDescricaoFalha());
        manutencaoExistente.setDataAbertura(dto.getDataAbertura());

        repository.save(manutencaoExistente);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "Mensagem", "Solicitação de manutenção atualizada com sucesso!",
                "id", manutencaoExistente.getId()
        ));
    }
}