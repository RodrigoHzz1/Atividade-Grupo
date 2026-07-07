package com.example.Atividade_em_grupo.Model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "manutencoes_model")
public class ManutencaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String equipamentoId;

    @Column(nullable = false)
    private String nomeEquipamento;

    @Column(nullable = false)
    private String criticidade; // Ex: Crítica, Rotineira

    @Column(nullable = false, columnDefinition = "TEXT")
    private String descricaoFalha;

    @Column(nullable = false)
    private LocalDateTime dataAbertura;

    public ManutencaoModel() {
    }

    public ManutencaoModel(Long id, String equipamentoId, String nomeEquipamento, String criticidade, String descricaoFalha, LocalDateTime dataAbertura) {
        this.id = id;
        this.equipamentoId = equipamentoId;
        this.nomeEquipamento = nomeEquipamento;
        this.criticidade = criticidade;
        this.descricaoFalha = descricaoFalha;
        this.dataAbertura = dataAbertura;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getEquipamentoId() { return equipamentoId; }
    public void setEquipamentoId(String equipamentoId) { this.equipamentoId = equipamentoId; }

    public String getNomeEquipamento() { return nomeEquipamento; }
    public void setNomeEquipamento(String nomeEquipamento) { this.nomeEquipamento = nomeEquipamento; }

    public String getCriticidade() { return criticidade; }
    public void setCriticidade(String criticidade) { this.criticidade = criticidade; }

    public String getDescricaoFalha() { return descricaoFalha; }
    public void setDescricaoFalha(String descricaoFalha) { this.descricaoFalha = descricaoFalha; }

    public LocalDateTime getDataAbertura() { return dataAbertura; }
    public void setDataAbertura(LocalDateTime dataAbertura) { this.dataAbertura = dataAbertura; }
}