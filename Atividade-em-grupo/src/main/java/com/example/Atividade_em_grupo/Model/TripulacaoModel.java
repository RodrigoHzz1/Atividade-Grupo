package com.example.Atividade_em_grupo.Model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tripulacao_model")
public class TripulacaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String nomeFuncionario;

    @Column(nullable = false)
    private String funcao; // Ex: Homem de Área, Engenheiro de Petróleo

    @Column(nullable = false)
    private String plataforma;

    @Column(nullable = false)
    private LocalDate dataInicioConfinamento;

    @Column(nullable = false)
    private LocalDate dataFimConfinamento;

    public TripulacaoModel() {
    }

    public TripulacaoModel(Long id, String nomeFuncionario, String funcao, String plataforma, LocalDate dataInicioConfinamento, LocalDate dataFimConfinamento) {
        this.id = id;
        this.nomeFuncionario = nomeFuncionario;
        this.funcao = funcao;
        this.plataforma = plataforma;
        this.dataInicioConfinamento = dataInicioConfinamento;
        this.dataFimConfinamento = dataFimConfinamento;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

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