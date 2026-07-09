package com.example.Atividade_em_grupo.Controller;

import com.example.Atividade_em_grupo.Model.ProducaoModel;
import com.example.Atividade_em_grupo.dtos.ProducaoRequestDTO;
import com.example.Atividade_em_grupo.dtos.ProducaoResponseDTO;
import com.example.Atividade_em_grupo.service.ProducaoService;
import com.example.Atividade_em_grupo.Exeception.ResourceNotFoundException;
import com.example.Atividade_em_grupo.Repository.ProducaoRepository;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/producao")

public class ProducaoController {

    @Autowired
    private ProducaoService service;

    @Autowired
    private ProducaoRepository repository;

    @GetMapping
    public ResponseEntity<List<ProducaoResponseDTO>> listarProducao() {
        List<ProducaoResponseDTO> producoes = service.listarTodas();
        return ResponseEntity.status(HttpStatus.OK).body(producoes);
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> salvar(@Valid @RequestBody ProducaoRequestDTO dto) {
        ProducaoModel salva = service.salvarProducao(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(Map.of(
                "Mensagem", "Dados de produção diária consolidados!",
                "id", salva.getId()
        ));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String, Object>> atualizar(@PathVariable Long id, @Valid @RequestBody ProducaoRequestDTO dto) {
        ProducaoModel producaoExistente = repository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Registro de produção não encontrado com o ID: " + id));

        producaoExistente.setPlataforma(dto.getPlataforma());
        producaoExistente.setBarrisPetroleo(dto.getBarrisPetroleo());
        producaoExistente.setMetrosCubicosGas(dto.getMetrosCubicosGas());
        producaoExistente.setDataProducao(dto.getDataProducao());

        repository.save(producaoExistente);

        return ResponseEntity.status(HttpStatus.OK).body(Map.of(
                "Mensagem", "Dados de produção atualizados com sucesso!",
                "id", producaoExistente.getId()
        ));
    }
}