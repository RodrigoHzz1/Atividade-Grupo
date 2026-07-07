package com.example.Atividade_em_grupo.service;

import com.example.Atividade_em_grupo.dtos.IncidenteRequestDTO;
import com.example.Atividade_em_grupo.dtos.IncidenteResponseDTO;
import com.example.Atividade_em_grupo.Model.IncidenteModel;
import com.example.Atividade_em_grupo.Repository.IncidenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncidenteService {

    @Autowired
    private IncidenteRepository repository;

    public List<IncidenteResponseDTO> listarTodos() {
        return repository
                .findAll()
                .stream()
                .map(i -> new IncidenteResponseDTO(
                        i.getId(),
                        i.getPlataforma(),
                        i.getData(),
                        i.getHora(),
                        i.getGravidade(),
                        i.getDescricao(),
                        i.getAcoesImediatas()
                ))
                .toList();
    }

    public IncidenteModel salvarIncidente(IncidenteRequestDTO incidenteDTO) {

        IncidenteModel novoIncidente = new IncidenteModel();
        novoIncidente.setPlataforma(incidenteDTO.getPlataforma());
        novoIncidente.setData(incidenteDTO.getData());
        novoIncidente.setHora(incidenteDTO.getHora());
        novoIncidente.setGravidade(incidenteDTO.getGravidade());
        novoIncidente.setDescricao(incidenteDTO.getDescricao());
        novoIncidente.setAcoesImediatas(incidenteDTO.getAcoesImediatas());

        return repository.save(novoIncidente);
    }
}