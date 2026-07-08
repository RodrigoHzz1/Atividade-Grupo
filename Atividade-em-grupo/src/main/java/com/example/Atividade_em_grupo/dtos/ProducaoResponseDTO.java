package com.example.Atividade_em_grupo.dtos;

import java.time.LocalDate;

public class ProducaoResponseDTO {

    private Long id;
    private String plataforma;
    private Double barrisPetroleo;
    private Double metrosCubicosGas;
    private LocalDate dataProducao;

    public ProducaoResponseDTO() {
    }

    public ProducaoResponseDTO(Long id, String plataforma, Double barrisPetroleo, Double metrosCubicosGas, LocalDate dataProducao) {
        this.id = id;
        this.plataforma = plataforma;
        this.barrisPetroleo = barrisPetroleo;
        this.metrosCubicosGas = metrosCubicosGas;
        this.dataProducao = dataProducao;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getPlataforma() { return plataforma; }
    public void setPlataforma(String plataforma) { this.plataforma = plataforma; }

    public Double getBarrisPetroleo() { return barrisPetroleo; }
    public void setBarrisPetroleo(Double barrisPetroleo) { this.barrisPetroleo = barrisPetroleo; }

    public Double getMetrosCubicosGas() { return metrosCubicosGas; }
    public void setMetrosCubicosGas(Double metrosCubicosGas) { this.metrosCubicosGas = metrosCubicosGas; }

    public LocalDate getDataProducao() { return dataProducao; }
    public void setDataProducao(LocalDate dataProducao) { this.dataProducao = dataProducao; }
}