package com.example.Atividade_em_grupo.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import java.time.LocalDateTime;

public class ManutencaoRequestDTO {

    @NotBlank(message = "O ID do equipamento é obrigatório.")
    private String equipamentoId;

    @NotBlank(message = "O nome do equipamento é obrigatório.")
    @Size(max = 255, message = "O nome do equipamento deve ter no máximo 255 caracteres.")
    private String nomeEquipamento;

    @NotBlank(message = "A criticidade é obrigatória.")
    private String criticidade;

    @NotBlank(message = "A descrição da falha é obrigatória.")
    @Size(min = 10, message = "A descrição da falha deve ter no mínimo 10 caracteres.")
    private String descricaoFalha;

    @NotNull(message = "A data e hora de abertura são obrigatórias.")
    private LocalDateTime dataAbertura;


    public ManutencaoRequestDTO() {
    }

    public ManutencaoRequestDTO(String equipamentoId, String nomeEquipamento, String criticidade, String descricaoFalha, LocalDateTime dataAbertura) {
        this.equipamentoId = equipamentoId;
        this.nomeEquipamento = nomeEquipamento;
        this.criticidade = criticidade;
        this.descricaoFalha = descricaoFalha;
        this.dataAbertura = dataAbertura;
    }

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
