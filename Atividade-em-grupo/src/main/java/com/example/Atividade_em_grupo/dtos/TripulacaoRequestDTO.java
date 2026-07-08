package com.example.Atividade_em_grupo.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

public class TripulacaoRequestDTO {

    @NotBlank(message = "O nome do funcionário é obrigatório.")
    @Size(max = 150, message = "O nome do funcionário deve ter no máximo 150 caracteres.")
    private String nomeFuncionario;

    @NotBlank(message = "A função é obrigatória.")
    private String funcao;

    @NotBlank(message = "A plataforma é obrigatória.")
    private String plataforma;

    @NotNull(message = "A data de início do confinamento é obrigatória.")
    private LocalDate dataInicioConfinamento;

    @NotNull(message = "A data de fim do confinamento é obrigatória.")
    private LocalDate dataFimConfinamento;

    public TripulacaoRequestDTO() {
    }

    public TripulacaoRequestDTO(String nomeFuncionario, String funcao, String plataforma, LocalDate dataInicioConfinamento, LocalDate dataFimConfinamento) {
        this.nomeFuncionario = nomeFuncionario;
        this.funcao = funcao;
        this.plataforma = plataforma;
        this.dataInicioConfinamento = dataInicioConfinamento;
        this.dataFimConfinamento = dataFimConfinamento;
    }

    public String getNomeFuncionario() { return nomeFuncionario; }
    public void setNomeFuncionario(String nomeFuncionario) { this.nomeFuncionario = nomeFuncionario; }

    public String getFuncao() { return funcao; }
    public void setFuncao(String funcao) { this.funcao = funcao; }

    public String getPlataforma() { return plataforma; }
    public void setPlataforma(String plataforma) { this.plataforma = plataforma; }

    public LocalDate getDataInicioConfinamento() { return dataInicioConfinamento; }
    public void setDataInicioConfinamento(LocalDate dataInicioConfinamento) { this.dataInicioConfinamento = dataInicioConfinamento; }

    public LocalDate getDataFimConfinamento() { return dataFimConfinamento; }
    public void setDataFimConfinamento(LocalDate dataFimConfinamento) { this.dataFimConfinamento = dataFimConfinamento; }
}