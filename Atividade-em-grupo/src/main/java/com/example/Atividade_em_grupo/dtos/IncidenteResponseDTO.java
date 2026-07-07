package com.example.Atividade_em_grupo.dtos;

import java.time.LocalDate;
import java.time.LocalTime;

public class IncidenteResponseDTO {

    private Long id;
    private String plataforma;
    private LocalDate data;
    private LocalTime hora;
    private String gravidade;
    private String descricao;
    private String acoesImediatas;

    public IncidenteResponseDTO() {
    }

    public IncidenteResponseDTO(Long id, String plataforma, LocalDate data, LocalTime hora, String gravidade, String descricao, String acoesImediatas) {
        this.id = id;
        this.plataforma = plataforma;
        this.data = data;
        this.hora = hora;
        this.gravidade = gravidade;
        this.descricao = descricao;
        this.acoesImediatas = acoesImediatas;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlataforma() {
        return plataforma;
    }

    public void setPlataforma(String plataforma) {
        this.plataforma = plataforma;
    }

    public LocalDate getData() {
        return data;
    }

    public void setData(LocalDate data) {
        this.data = data;
    }

    public LocalTime getHora() {
        return hora;
    }

    public void setHora(LocalTime hora) {
        this.hora = hora;
    }

    public String getGravidade() {
        return gravidade;
    }

    public void setGravidade(String gravidade) {
        this.gravidade = gravidade;
    }

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getAcoesImediatas() {
        return acoesImediatas;
    }

    public void setAcoesImediatas(String acoesImediatas) {
        this.acoesImediatas = acoesImediatas;
    }
}
