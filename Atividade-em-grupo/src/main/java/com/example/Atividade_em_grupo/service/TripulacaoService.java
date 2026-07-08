package com.example.Atividade_em_grupo.service;

import com.example.Atividade_em_grupo.dtos.TripulacaoRequestDTO;
import com.example.Atividade_em_grupo.dtos.TripulacaoResponseDTO;
import com.example.Atividade_em_grupo.Model.TripulacaoModel;
import com.example.Atividade_em_grupo.Repository.TripulacaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TripulacaoService {

    @Autowired
    private TripulacaoRepository repository;

    public List<TripulacaoResponseDTO> listarTodas() {
        return repository
                .findAll()
                .stream()
                .map(t -> new TripulacaoResponseDTO(
                        t.getId(),
                        t.getNomeFuncionario(),
                        t.getFuncao(),
                        t.getPlataforma(),
                        t.getDataInicioConfinamento(),
                        t.getDataFimConfinamento()
                ))
                .toList();
    }

    public TripulacaoModel salvarTripulacao(TripulacaoRequestDTO tripulacaoDTO) {
        TripulacaoModel novaTripulacao = new TripulacaoModel();

        novaTripulacao.setNomeFuncionario(tripulacaoDTO.getNomeFuncionario());
        novaTripulacao.setFuncao(tripulacaoDTO.getFuncao());
        novaTripulacao.setPlataforma(tripulacaoDTO.getPlataforma());
        novaTripulacao.setDataInicioConfinamento(tripulacaoDTO.getDataInicioConfinamento());
        novaTripulacao.setDataFimConfinamento(tripulacaoDTO.getDataFimConfinamento());

        return repository.save(novaTripulacao);
    }
}