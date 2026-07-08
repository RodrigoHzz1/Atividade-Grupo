import React from 'react';
import './contato.css';

export default function Contato() {
  return (
    <div className="page-container contact-page">
      <h2>Contato & Suporte de Emergência</h2>
      <div className="emergency-alert">
        <p><strong>ATENÇÃO:</strong> Canais de contingência internacional 24 horas.</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <h3>Base de Apoio Macaé</h3>
          <p>Telefone: +55 (22) 3399-1000</p>
          <p>Rádio: HF Canal 16</p>
        </div>
        <div className="contact-card emergency-card">
          <h3>Plantão de Resgate Internacional</h3>
          <p><strong>Linha Direta:</strong> 0800-AOE-9111</p>
          <p>Centro de Resposta a Incidentes</p>
        </div>
      </div>
    </div>
  );
}