import React from 'react';
import './quemsomos.css';

export default function QuemSomos() {
  return (
    <div className="page-container text-page">
      <h2>Quem Somos & Sustentabilidade</h2>
      
      <section className="info-section">
        <h3>Missão e Segurança Offshore</h3>
        <p>
          A Atlantic Offshore Energy (AOE) atua na exploração e produção sustentável de hidrocarbonetos na camada do Pré-Sal brasileiro. Nossa missão é prover energia com excelência operacional, priorizando a integridade física de nossos colaboradores e a máxima confiabilidade de nossas plantas operacionais marítimas.
        </p>
      </section>

      <section className="info-section">
        <h3>Preservação do Ecossistema Marinho</h3>
        <p>
          Operar na rica biodiversidade da Bacia de Santos exige responsabilidade ecológica. Desenvolvemos soluções rigorosas para o tratamento de água de produção, controle de emissões atmosféricas e monitoramento contínuo da fauna marinha circundante às nossas unidades fixas e flutuantes (FPSOs).
        </p>
      </section>
    </div>
  );
}