import React, { useState } from 'react';
import axios from 'axios';
import './manutencao.css';

export default function Manutencao() {
  const [formData, setFormData] = useState({ equipamentoId: '', criticidade: 'Planejada', descricaoFalha: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/manutencoes', formData);
      alert('Ordem de Serviço registrada com sucesso.');
      setFormData({ equipamentoId: '', criticidade: 'Planejada', descricaoFalha: '' });
    } catch (error) {
      console.error(error);
      alert('Erro ao conectar com o sistema de gestão de ativos.');
    }
  };

  return (
    <div className="page-container form-page">
      <h2>Solicitação de Manutenção de Ativos</h2>
      <form onSubmit={handleSubmit} className="aoe-form">
        <label>ID / TAG do Equipamento:</label>
        <input type="text" placeholder="Ex: TURB-COMP-01A" required value={formData.equipamentoId} onChange={e => setFormData({...formData, equipamentoId: e.target.value})} />

        <label>Grau de Criticidade:</label>
        <select value={formData.criticidade} onChange={e => setFormData({...formData, criticidade: e.target.value})}>
          <option value="Planejada">Rotina / Planejada</option>
          <option value="Urgente">Urgente (Performance Baixa)</option>
          <option value="Critica">Crítica (Shutdown Preventivo)</option>
        </select>

        <label>Descrição Detalhada da Falha:</label>
        <textarea required rows="4" value={formData.descricaoFalha} onChange={e => setFormData({...formData, descricaoFalha: e.target.value})}></textarea>

        <button type="submit" className="btn-submit warning-btn">Abrir Chamado Técnico (OS)</button>
      </form>
    </div>
  );
}