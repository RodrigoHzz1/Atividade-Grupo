import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="page-container home-page">
      <h2>Dashboard Corporativo</h2>
      <p className="subtitle">Visão Geral de Operações - Bacia de Santos</p>
      
      <div className="dashboard-grid">
        <div className="stat-card hse-indicator">
          <h4>Segurança Operacional</h4>
          <span className="metric-number">428</span>
          <p>Dias consecutivos sem acidentes com afastamento (LTI)</p>
        </div>
        <div className="stat-card assets-indicator">
          <h4>Monitoramento de Ativos</h4>
          <ul className="platform-list">
            <li><span className="status-dot green"></span> FPSO Cidade de Santos (Extração)</li>
            <li><span className="status-dot green"></span> FPSO Atlantic Alpha (Produção)</li>
            <li><span className="status-dot orange"></span> Sonda AOE-03 (Perfuração)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}