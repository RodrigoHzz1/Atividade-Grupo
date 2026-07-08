package com.example.Atividade_em_grupo.service;

import com.example.Atividade_em_grupo.dtos.ProducaoRequestDTO;
import com.example.Atividade_em_grupo.dtos.ProducaoResponseDTO;
import com.example.Atividade_em_grupo.Model.ProducaoModel;
import com.example.Atividade_em_grupo.Repository.ProducaoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProducaoService {

    @Autowired
    private ProducaoRepository repository;

    public List<ProducaoResponseDTO> listarTodas() {
        return repository
                .findAll()
                .stream()
                .map(p -> new ProducaoResponseDTO(
                        p.getId(),
                        p.getPlataforma(),
                        p.getBarrisPetroleo(),
                        p.getMetrosCubicosGas(),
                        p.getDataProducao()
                ))
                .toList();
    }

    public ProducaoModel salvarProducao(ProducaoRequestDTO producaoDTO) {
        ProducaoModel novaProducao = new ProducaoModel();

        novaProducao.setPlataforma(producaoDTO.getPlataforma());
        novaProducao.setBarrisPetroleo(producaoDTO.getBarrisPetroleo());
        novaProducao.setMetrosCubicosGas(producaoDTO.getMetrosCubicosGas());
        novaProducao.setDataProducao(producaoDTO.getDataProducao());

        return repository.save(novaProducao);
    }
}