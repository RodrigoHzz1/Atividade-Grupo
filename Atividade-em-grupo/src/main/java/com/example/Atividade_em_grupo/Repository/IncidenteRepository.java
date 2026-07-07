package com.example.Atividade_em_grupo.Repository;


import com.example.Atividade_em_grupo.Model.IncidenteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncidenteRepository extends JpaRepository<IncidenteModel, Long> {
}