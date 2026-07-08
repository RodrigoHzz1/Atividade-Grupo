package com.example.Atividade_em_grupo.dtos;

import java.time.LocalDateTime;

public class ManutencaoResponseDTO {

    private Long id;
    private String equipamentoId;
    private String nomeEquipamento;
    private String criticidade;
    private String descricaoFalha;
    private LocalDateTime dataAbertura;

    public ManutencaoResponseDTO() {
    }

    public ManutencaoResponseDTO(Long id, String equipamentoId, String nomeEquipamento, String criticidade, String descricaoFalha, LocalDateTime dataAbertura) {
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