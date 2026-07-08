import React from 'react';
import Card from './components/Card'; // Ajuste o caminho se necessário[cite: 11]
import './home.css';

export default function Home() {
  return (
    <div className="page-container home-page">
      <h2>Dashboard Corporativo</h2>
      <p className="subtitle">Visão Geral de Operações - Bacia de Santos</p>
      
      <div className="dashboard-grid" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        
        {/* Card de Segurança utilizando o componente oficial do time */}
        <Card 
          title="Segurança Operacional"
          metric={428}
          unit=" dias"
          description="Dias consecutivos sem acidentes com afastamento (LTI)."
          status="normal"
          highlight={true}
        />

        {/* Card de Alerta usando o componente oficial */}
        <Card 
          title="Status da Sonda AOE-03"
          metric="Aviso"
          description="Unidade de Perfuração operando em regime de atenção técnica."
          status="alerta"
        />

        {/* Card Crítico usando o componente oficial */}
        <Card 
          title="Metas de Produção"
          metric="94%"
          description="FPSO Atlantic Alpha operando abaixo da meta estipulada para o trimestre."
          status="critico"
        />

      </div>
    </div>
  );
}