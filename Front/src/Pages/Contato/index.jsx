import React, { useState } from 'react';
import Input from '../../Componentes/Input/index';
import './contato.css';

const emergencyContacts = [
  { title: 'Plantão de Resgate 24h', phone: '0800-AOE-9111', description: 'Centro de Resposta a Incidentes', urgent: true, icon: '🚨' },
  { title: 'Base de Apoio Macaé', phone: '+55 (22) 3399-1000', description: 'Suporte operacional e logístico', urgent: false, icon: '📍' },
  { title: 'Coordenação de Segurança', phone: '+55 (22) 3399-2000', description: 'Saúde, Segurança e Meio Ambiente', urgent: false, icon: '🛡️' },
  { title: 'Rádio de Emergência', phone: 'HF Canal 16 / VHF Canal 9', description: 'Comunicação direta com plataforma', urgent: true, icon: '📡' },
];

const supportTeams = [
  { department: 'Engenharia', email: 'engenharia@aoe.com.br', phone: '+55 (22) 3399-3000' },
  { department: 'Operações', email: 'operacoes@aoe.com.br', phone: '+55 (22) 3399-3100' },
  { department: 'Manutenção', email: 'manutencao@aoe.com.br', phone: '+55 (22) 3399-3200' },
  { department: 'RH & Pessoal', email: 'rh@aoe.com.br', phone: '+55 (22) 3399-3300' },
];

function handleCall(phone) {
  window.location.href = `tel:${phone.replace(/\s|\(|\)|-/g, "")}`;
}

function handleMail(email) {
  window.location.href = `mailto:${email}`;
}

/* Componente interno: modal de reporte */
function ReportModal({ report, onChange, onClose, onSubmit }) {
  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Formulário de reportar incidente">
      <div className="modal">
        <header className="modal-header">
          <h3>Reportar Incidente</h3>
          <button className="modal-close" onClick={onClose} aria-label="Fechar">✕</button>
        </header>

        <form className="modal-body" onSubmit={onSubmit}>
          <Input id="rep-name" label="Nome" value={report.name} onChange={(v) => onChange('name', v)} placeholder="Seu nome" />
          <Input id="rep-phone" label="Telefone" value={report.phone} onChange={(v) => onChange('phone', v)} placeholder="Telefone para contato" />
          <Input id="rep-email" label="Email" value={report.email} onChange={(v) => onChange('email', v)} placeholder="Email (opcional)" />
          <Input id="rep-location" label="Local" value={report.location} onChange={(v) => onChange('location', v)} placeholder="Local do incidente" />

          <label className="form-field__label">Descrição</label>
          <textarea
            className="form-field__input"
            rows="4"
            value={report.description}
            onChange={(e) => onChange('description', e.target.value)}
            placeholder="Descreva o incidente com o máximo de detalhes"
          />

          <div className="modal-actions">
            <button type="button" className="btn btn-outline" onClick={onClose}>Cancelar</button>
            <button type="submit" className="btn btn-primary">Enviar Relatório</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Contato() {
  const [showModal, setShowModal] = useState(false);
  const [report, setReport] = useState({ name: '', phone: '', email: '', location: '', description: '' });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleReportChange = (field, value) => setReport(prev => ({ ...prev, [field]: value }));

  const submitReport = (e) => {
    e.preventDefault();
    console.log('Relatório enviado:', report);
    alert('Relatório enviado com sucesso. Equipe AOE será acionada.');
    setReport({ name: '', phone: '', email: '', location: '', description: '' });
    closeModal();
  };

  return (
    <div className="contato-page">
      {/* HERO / CTA */}
      <section className="contact-header hero-cta">
        <div className="hero-left">
          <h1>Contatos de Emergência</h1>
          <p>Suporte 24/7 · Resposta rápida · Equipa de Resposta em <strong>15 minutos</strong></p>

          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => handleCall('0800-AOE-9111')}>Ligar Agora (24h)</button>
            <button className="btn btn-outline" onClick={() => handleMail('engenharia@aoe.com.br')}>Enviar Email</button>
            <a className="btn btn-ghost" href="#protocolos">Protocolos</a>
          </div>

          <div className="hero-badges">
            <span className="badge">24/7</span>
            <span className="badge">Resposta ≤ 15min</span>
            <span className="badge">Equipe Certificada</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">0800-AOE-9111</div>
              <div className="stat-label">Linha Direta</div>
            </div>
            <div className="stat">
              <div className="stat-value">+55 (22) 3399-1000</div>
              <div className="stat-label">Base Macaé</div>
            </div>
            <div className="stat">
              <div className="stat-value">HF Canal 16</div>
              <div className="stat-label">Rádio Emergência</div>
            </div>
          </div>
        </div>
      </section>

      {/* LINHAS DE EMERGÊNCIA */}
      <section className="emergency-section">
        <div className="emergency-banner">
          <h2>🚨 LINHAS DE EMERGÊNCIA</h2>
          <p>Disponível 24 horas por dia, 7 dias por semana</p>
        </div>

        <div className="emergency-grid">
          {emergencyContacts.map((c, i) => (
            <div key={i} className={`emergency-card ${c.urgent ? 'urgent' : ''}`}>
              <div className="card-icon">{c.icon}</div>
              <h3>{c.title}</h3>
              <div className="card-phone">{c.phone}</div>
              <p>{c.description}</p>
              {c.urgent && <div className="urgent-badge">URGENTE</div>}
              <div className="card-actions">
                <button className="btn-inline" onClick={() => handleCall(c.phone)}>Ligar</button>
                <button className="btn-inline" onClick={() => handleMail('engenharia@aoe.com.br')}>Email</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INCENTIVOS / TRUST */}
      <section className="trust-section">
        <h2>Por que escolher nossa resposta?</h2>
        <div className="trust-grid">
          <div className="trust-card"><h3>Resposta Imediata</h3><p>Equipe pronta 24/7 com protocolos testados.</p></div>
          <div className="trust-card"><h3>Equipe Especializada</h3><p>Profissionais certificados em HSE, engenharia e logística.</p></div>
          <div className="trust-card"><h3>Comunicação Direta</h3><p>Telefone, rádio HF/VHF, email e coordenação internacional.</p></div>
        </div>
      </section>

      {/* EQUIPES DE SUPORTE */}
      <section className="support-teams-section">
        <h2>Equipes de Suporte</h2>
        <p className="section-subtitle">Contatos departamentais para solicitações específicas</p>
        <div className="support-table">
          <table>
            <thead>
              <tr><th>Departamento</th><th>Email</th><th>Telefone</th></tr>
            </thead>
            <tbody>
              {supportTeams.map((t, idx) => (
                <tr key={idx}>
                  <td className="department-name">{t.department}</td>
                  <td><a href={`mailto:${t.email}`}>{t.email}</a></td>
                  <td><a href={`tel:${t.phone}`}>{t.phone}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROTOCOLOS */}
      <section id="protocolos" className="protocols-section">
        <h2>Protocolos de Contingência</h2>
        <div className="protocols-grid">
          <div className="protocol-card"><h3>Incidente/Acidente</h3><ol><li>Ligue para 0800-AOE-9111</li><li>Forneça localização exata</li><li>Descreva situação e feridos</li><li>Aguarde instruções</li></ol></div>
          <div className="protocol-card"><h3>Falha Operacional</h3><ol><li>Isolque sistema comprometido</li><li>Contate Operações</li><li>Iniciar protocolo de parada</li><li>Aguarde equipe de resposta</li></ol></div>
          <div className="protocol-card"><h3>Ambiental/Derramamento</h3><ol><li>Ative alarme de contenção</li><li>Notifique Segurança imediatamente</li><li>Comece limpeza se seguro</li><li>Documenter todos os detalhes</li></ol></div>
        </div>
      </section>

      {/* INTERNACIONAL */}
      <section className="international-section">
        <h2>Contatos Internacionais</h2>
        <div className="international-info">
          <p><strong>Código de País Brasil:</strong> +55</p>
          <p><strong>Comunicação internacional 24h:</strong> +55 (21) 2555-AEOE (2363)</p>
          <p><strong>Centro de Coordenação:</strong> Rio de Janeiro - Zona Portuária</p>
        </div>
      </section>

      {/* FAB + Modal */}
      <button className="fab" onClick={openModal} aria-label="Ação rápida">📞 Reportar</button>

      {showModal && (
        <ReportModal
          report={report}
          onChange={handleReportChange}
          onClose={closeModal}
          onSubmit={submitReport}
        />
      )}
    </div>
  );
}
