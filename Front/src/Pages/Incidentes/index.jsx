import React, { useState } from 'react';
import Input from '../../Componentes/Input/index';
import { incidentesAPI } from '../../api';
import './incidentes.css';

export default function Incidentes() {
  const [formData, setFormData] = useState({
    plataforma: '',
    data: '',
    hora: '',
    gravidade: 'MEDIA',
    descricao: '',
    acoesImediatas: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.descricao.length < 10) {
      setError('Descrição deve ter no mínimo 10 caracteres');
      return;
    }
    setLoading(true);
    try {
      await incidentesAPI.criar(formData);
      alert('Incidente registrado com sucesso!');
      setFormData({ plataforma: '', data: '', hora: '', gravidade: 'MEDIA', descricao: '', acoesImediatas: '' });
    } catch (err) {
      setError('Erro: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container incidentes-page">
      <h1>Mapear Incidente (HSE)</h1>
      <p className="page-subtitle">Sistema de Saúde, Segurança e Meio Ambiente</p>

      {error && <div className="alert alert-error">{error}</div>}

      <form className="incident-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados do Incidente</legend>

          <Input id="plataforma" label="Plataforma" value={formData.plataforma} onChange={(v) => handleChange('plataforma', v)} placeholder="Nome da plataforma (máx 100)" />
          
          <Input id="data" label="Data" type="date" value={formData.data} onChange={(v) => handleChange('data', v)} />
          
          <Input id="hora" label="Hora" type="time" value={formData.hora} onChange={(v) => handleChange('hora', v)} />

          <label className="form-field__label">Gravidade</label>
          <select value={formData.gravidade} onChange={(e) => handleChange('gravidade', e.target.value)} className="form-field__input">
            <option value="BAIXA">Baixa</option>
            <option value="MEDIA">Média</option>
            <option value="ALTA">Alta</option>
          </select>

          <Input id="descricao" label="Descrição" value={formData.descricao} onChange={(v) => handleChange('descricao', v)} placeholder="Mínimo 10 caracteres" />
          
          <Input id="acoesImediatas" label="Ações Imediatas" value={formData.acoesImediatas} onChange={(v) => handleChange('acoesImediatas', v)} placeholder="Ações tomadas" />
        </fieldset>

        <button type="submit" className="btn-submit" disabled={loading}>{loading ? 'Enviando...' : 'Registrar Incidente'}</button>
      </form>
    </div>
  );
}
