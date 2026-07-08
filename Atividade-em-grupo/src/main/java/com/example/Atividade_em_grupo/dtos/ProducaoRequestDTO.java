package com.example.Atividade_em_grupo.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import jakarta.validation.constraints.Size;
import java.time.LocalDate;

public class ProducaoRequestDTO {

    @NotBlank(message = "A plataforma é obrigatória.")
    @Size(max = 255, message = "O nome da plataforma deve ter no máximo 255 caracteres.")
    private String plataforma;

    @NotNull(message = "A quantidade de barris de petróleo é obrigatória.")
    @PositiveOrZero(message = "A quantidade de barris de petróleo deve ser maior ou igual a zero.")
    private Double barrisPetroleo;

    @NotNull(message = "A quantidade de metros cúbicos de gás é obrigatória.")
    @PositiveOrZero(message = "A quantidade de metros cúbicos de gás deve ser maior ou igual a zero.")
    private Double metrosCubicosGas;

    @NotNull(message = "A data de produção é obrigatória.")
    private LocalDate dataProducao;

    public ProducaoRequestDTO() {
    }

    public ProducaoRequestDTO(String plataforma, Double barrisPetroleo, Double metrosCubicosGas, LocalDate dataProducao) {
        this.plataforma = plataforma;
        this.barrisPetroleo = barrisPetroleo;
        this.metrosCubicosGas = metrosCubicosGas;
        this.dataProducao = dataProducao;
    }

    public String getPlataforma() { return plataforma; }
    public void setPlataforma(String plataforma) { this.plataforma = plataforma; }

    public Double getBarrisPetroleo() { return barrisPetroleo; }
    public void setBarrisPetroleo(Double barrisPetroleo) { this.barrisPetroleo = barrisPetroleo; }

    public Double getMetrosCubicosGas() { return metrosCubicosGas; }
    public void setMetrosCubicosGas(Double metrosCubicosGas) { this.metrosCubicosGas = metrosCubicosGas; }

    public LocalDate getDataProducao() { return dataProducao; }
    public void setDataProducao(LocalDate dataProducao) { this.dataProducao = dataProducao; }
}