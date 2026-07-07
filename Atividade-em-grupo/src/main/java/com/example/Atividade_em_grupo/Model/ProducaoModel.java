package com.example.Atividade_em_grupo.Model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "producao_model")
public class ProducaoModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String plataforma;

    @Column(nullable = false)
    private Double barrisPetroleo;

    @Column(nullable = false)
    private Double metrosCubicosGas;

    @Column(nullable = false)
    private LocalDate dataProducao;

    public ProducaoModel() {
    }

    public ProducaoModel(Long id, String plataforma, Double barrisPetroleo, Double metrosCubicosGas, LocalDate dataProducao) {
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