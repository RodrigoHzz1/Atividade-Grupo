package com.example.Atividade_em_grupo.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;
import java.time.LocalTime;

public class IncidenteRequestDTO {

    @NotBlank(message = "A plataforma é obrigatória.")
    @Size(max = 100, message = "O nome da plataforma deve ter no máximo 100 caracteres.")
    private String plataforma;

    @NotNull(message = "A data do incidente é obrigatória.")
    private LocalDate data;

    @NotNull(message = "A hora do incidente é obrigatória.")
    private LocalTime hora;

    @NotBlank(message = "A gravidade é obrigatória.")
    private String gravidade;

    @NotBlank(message = "A descrição do incidente é obrigatória.")
    @Size(min = 10, message = "A descrição deve conter detalhes mínimos sobre o incidente (mínimo 10 caracteres).")
    private String descricao;

    @NotBlank(message = "As ações imediatas são obrigatórias.")
    private String acoesImediatas;

    public IncidenteRequestDTO() {
    }

    public IncidenteRequestDTO(String plataforma, LocalDate data, LocalTime hora, String gravidade, String descricao, String acoesImediatas) {
        this.plataforma = plataforma;
        this.data = data;
        this.hora = hora;
        this.gravidade = gravidade;
        this.descricao = descricao;
        this.acoesImediatas = acoesImediatas;
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