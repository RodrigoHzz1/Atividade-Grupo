package com.example.Atividade_em_grupo.service;

import com.example.Atividade_em_grupo.dtos.ManutencaoRequestDTO;
import com.example.Atividade_em_grupo.dtos.ManutencaoResponseDTO;
import com.example.Atividade_em_grupo.Model.ManutencaoModel;
import com.example.Atividade_em_grupo.Repository.ManutencaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ManutencaoService {

    @Autowired
    private ManutencaoRepository repository;

    public List<ManutencaoResponseDTO> listarTodas() {
        return repository
                .findAll()
                .stream()
                .map(m -> new ManutencaoResponseDTO(
                        m.getId(),
                        m.getEquipamentoId(),
                        m.getNomeEquipamento(),
                        m.getCriticidade(),
                        m.getDescricaoFalha(),
                        m.getDataAbertura()
                ))
                .toList();
    }

    public ManutencaoModel salvarManutencao(ManutencaoRequestDTO manutencaoDTO) {
        ManutencaoModel novaManutencao = new ManutencaoModel();

        novaManutencao.setEquipamentoId(manutencaoDTO.getEquipamentoId());
        novaManutencao.setNomeEquipamento(manutencaoDTO.getNomeEquipamento());
        novaManutencao.setCriticidade(manutencaoDTO.getCriticidade());
        novaManutencao.setDescricaoFalha(manutencaoDTO.getDescricaoFalha());
        novaManutencao.setDataAbertura(manutencaoDTO.getDataAbertura());

        return repository.save(novaManutencao);
    }
}