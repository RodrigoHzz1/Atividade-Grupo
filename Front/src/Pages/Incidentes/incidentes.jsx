import React, { useState } from 'react';
import axios from 'axios';
import './incidentes.css';

export default function Incidentes() {
  const [formData, setFormData] = useState({
    gravidade: 'Baixa', dataHora: '', plataforma: '', descricao: '', acoesImediatas: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/incidentes', formData);
      alert('Incidente operacional transmitido com sucesso à base em terra!');
      setFormData({ gravidade: 'Baixa', dataHora: '', plataforma: '', descricao: '', acoesImediatas: '' });
    } catch (error) {
      console.error(error);
      alert('Falha na comunicação com o servidor.');
    }
  };

  return (
    <div className="page-container form-page">
      <h2>Registro de Incidentes Operacionais (HSE)</h2>
      <form onSubmit={handleSubmit} className="aoe-form">
        <label>Nível de Gravidade:</label>
        <select value={formData.gravidade} onChange={e => setFormData({...formData, gravidade: e.target.value})}>
          <option value="Baixa">Baixa (Sem Interrupção)</option>
          <option value="Média">Média (Interrupção Parcial)</option>
          <option value="Alta">Alta (Shutdown / Crítico)</option>
        </select>

        <label>Data e Hora da Ocorrência:</label>
        <input type="datetime-local" required value={formData.dataHora} onChange={e => setFormData({...formData, dataHora: e.target.value})} />

        <label>Plataforma Ocorrida:</label>
        <input type="text" placeholder="Ex: FPSO Cidade de Santos" required value={formData.plataforma} onChange={e => setFormData({...formData, plataforma: e.target.value})} />

        <label>Descrição Detalhada:</label>
        <textarea required rows="4" value={formData.descricao} onChange={e => setFormData({...formData, descricao: e.target.value})}></textarea>

        <label>Ações Imediatas Tomadas:</label>
        <textarea required rows="3" value={formData.acoesImediatas} onChange={e => setFormData({...formData, acoesImediatas: e.target.value})}></textarea>

        <button type="submit" className="btn-submit danger-btn">Transmitir Registro HSE</button>
      </form>
    </div>
  );
}
}