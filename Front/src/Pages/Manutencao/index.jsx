import React, { useState } from 'react';
import Input from '../../Componentes/Input/index';
import { manutencaoAPI } from '../../api';
import './manutencao.css';

export default function Manutencao() {
  const [formData, setFormData] = useState({
    equipamentoId: '',
    nomeEquipamento: '',
    criticidade: 'MEDIA',
    descricaoFalha: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.descricaoFalha.length < 10) {
      setError('Descrição deve ter no mínimo 10 caracteres');
      return;
    }
    setLoading(true);
    try {
      await manutencaoAPI.criar(formData);
      alert('Solicitação registrada com sucesso!');
      setFormData({ equipamentoId: '', nomeEquipamento: '', criticidade: 'MEDIA', descricaoFalha: '' });
    } catch (err) {
      setError('Erro: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container manutencao-page">
      <h1>Solicitar Manutenção</h1>
      <p className="page-subtitle">Gestão de Manutenção Preventiva e Corretiva</p>

      {error && <div className="alert alert-error">{error}</div>}

      <form className="maintenance-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados da Solicitação</legend>

          <Input id="equipamentoId" label="ID do Equipamento" value={formData.equipamentoId} onChange={(v) => handleChange('equipamentoId', v)} placeholder="ID único" />
          
          <Input id="nomeEquipamento" label="Nome do Equipamento" value={formData.nomeEquipamento} onChange={(v) => handleChange('nomeEquipamento', v)} placeholder="Nome (máx 255)" />

          <label className="form-field__label">Criticidade</label>
          <select value={formData.criticidade} onChange={(e) => handleChange('criticidade', e.target.value)} className="form-field__input">
            <option value="BAIXA">Baixa</option>
            <option value="MEDIA">Média</option>
            <option value="ALTA">Alta</option>
            <option value="CRITICA">Crítica</option>
          </select>

          <Input id="descricaoFalha" label="Descrição da Falha" value={formData.descricaoFalha} onChange={(v) => handleChange('descricaoFalha', v)} placeholder="Mínimo 10 caracteres" />
        </fieldset>

        <button type="submit" className="btn-submit" disabled={loading}>{loading ? 'Enviando...' : 'Solicitar Manutenção'}</button>
      </form>
    </div>
  );
}
