import React from 'react';
import Card from '../../Componentes/Card/index';
import './home.css';

export default function Home() {
  const metrics = [
    { title: 'Produção Diária', metric: '1.250', unit: 'bbl/dia', status: 'normal', icon: '⛽', highlight: true },
    { title: 'Taxa de Disponibilidade', metric: '98.5', unit: '%', status: 'normal', icon: '✓' },
    { title: 'Acidentes (30 dias)', metric: '0', unit: 'incidentes', status: 'normal', icon: '🛡️' },
    { title: 'Equipamentos em Manutenção', metric: '3', unit: 'ativos', status: 'alerta', icon: '🔧' },
    { title: 'Pessoal Embarcado', metric: '87', unit: 'pessoas', status: 'normal', icon: '👥' },
    { title: 'Alertas Críticos', metric: '1', unit: 'sistema', status: 'critico', icon: '⚠️' },
  ];

  const leaders = [
    { name: 'Kauã', position: 'Diretor Executivo', department: 'Presidência', icon: '👔' },
    { name: 'Juan', position: 'Gerente de Operações', department: 'Operações', icon: '⚙️' },
    { name: 'Bruno', position: 'Diretor de Engenharia', department: 'Engenharia', icon: '🏗️' },
    { name: 'Rodrigo', position: 'Gerente de Segurança', department: 'HSE', icon: '🛡️' },
    { name: 'Roberto', position: 'Diretor Financeiro', department: 'Financeiro', icon: '💰' },
    { name: 'Denner', position: 'Gerente de Recursos Humanos', department: 'RH', icon: '👥' },
  ];

  return (
    <div className="home-page">
      <section className="dashboard-header">
        <div className="header-content">
          <h1>Atlantic Offshore Energy</h1>
          <p>Sistema Integrado de Operações - Bacia de Santos</p>
          <p className="timestamp">Última atualização: {new Date().toLocaleString('pt-BR')}</p>
        </div>
      </section>

      <section className="dashboard-metrics">
        <h2>Indicadores Operacionais</h2>
        <div className="metrics-grid">
          {metrics.map((metric, idx) => (
            <Card
              key={idx}
              title={metric.title}
              metric={metric.metric}
              unit={metric.unit}
              icon={metric.icon}
              status={metric.status}
              highlight={metric.highlight}
            />
          ))}
        </div>
      </section>

      <section className="leadership-section">
        <h2>Liderança Executiva</h2>
        <p className="section-subtitle">Equipe estratégica da Atlantic Offshore Energy</p>
        <div className="leaders-grid">
          {leaders.map((leader, idx) => (
            <div key={idx} className="leader-card">
              <div className="leader-icon">{leader.icon}</div>
              <h3>{leader.name}</h3>
              <p className="leader-position">{leader.position}</p>
              <p className="leader-department">{leader.department}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-alerts">
        <h2>Alertas e Notificações</h2>
        <div className="alerts-container">
          <div className="alert alert-warning">
            <strong>⚠️ Aviso:</strong> Manutenção preventiva agendada para Compressor #2 - 15:30 hoje
          </div>
          <div className="alert alert-info">
            <strong>ℹ️ Info:</strong> Escala de tripulação atualizada - Turno noturno confirmado
          </div>
        </div>
      </section>
    </div>
  );
}
