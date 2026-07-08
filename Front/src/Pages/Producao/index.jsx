import React, { useState, useEffect } from 'react';
import Input from '../../Componentes/Input/index';
import { producaoAPI } from '../../api';
import './producao.css';

export default function Producao() {
  const [showForm, setShowForm] = useState(false);
  const [producaoList, setProducaoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    plataforma: '',
    barrisPetroleo: '',
    metrosCubicosGas: '',
    dataProducao: '',
  });

  useEffect(() => {
    carregarProducao();
  }, []);

  const carregarProducao = async () => {
    setLoading(true);
    try {
      const data = await producaoAPI.listar();
      setProducaoList(data);
    } catch (err) {
      console.error('Erro ao carregar produção:', err);
      setError('Erro ao carregar dados de produção');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.plataforma || !formData.barrisPetroleo || !formData.metrosCubicosGas || !formData.dataProducao) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    try {
      await producaoAPI.criar(formData);
      setSuccess('Registro de produção criado com sucesso!');
      setFormData({ plataforma: '', barrisPetroleo: '', metrosCubicosGas: '', dataProducao: '' });
      setShowForm(false);
      await carregarProducao();
    } catch (err) {
      setError('Erro ao registrar produção: ' + err.message);
    }
  };

  return (
    <div className="producao-page">
      <section className="producao-header">
        <h1>📊 Produção Diária</h1>
        <p className="page-subtitle">Monitoramento de Produção em Tempo Real - Bacia de Santos</p>

        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancelar' : '+ Novo Registro'}
        </button>
      </section>

      {/* FORMULÁRIO */}
      {showForm && (
        <section className="producao-form-section">
          <h2>Registrar Nova Produção</h2>

          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form className="producao-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <Input
                id="plataforma"
                label="Plataforma"
                value={formData.plataforma}
                onChange={(v) => handleChange('plataforma', v)}
                placeholder="Nome da plataforma (ex: P-32)"
              />

              <Input
                id="dataProducao"
                label="Data de Produção"
                type="date"
                value={formData.dataProducao}
                onChange={(v) => handleChange('dataProducao', v)}
              />
            </div>

            <div className="form-grid-2">
              <div className="form-field-group">
                <label className="form-field__label">Barris de Petróleo</label>
                <div className="input-with-unit">
                  <Input
                    id="barrisPetroleo"
                    label=""
                    type="number"
                    step="0.01"
                    value={formData.barrisPetroleo}
                    onChange={(v) => handleChange('barrisPetroleo', v)}
                    placeholder="0.00"
                  />
                  <span className="unit-label">barris/dia</span>
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-field__label">Metros Cúbicos de Gás</label>
                <div className="input-with-unit">
                  <Input
                    id="metrosCubicosGas"
                    label=""
                    type="number"
                    step="0.01"
                    value={formData.metrosCubicosGas}
                    onChange={(v) => handleChange('metrosCubicosGas', v)}
                    placeholder="0.00"
                  />
                  <span className="unit-label">m³/dia</span>
                </div>
              </div>
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Registrar Produção
              </button>
            </div>
          </form>
        </section>
      )}

      {/* LISTAGEM */}
      <section className="producao-list-section">
        <h2>Histórico de Produção</h2>

        {loading ? (
          <div className="loading">Carregando dados...</div>
        ) : producaoList.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum registro de produção encontrado</p>
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              + Criar Primeiro Registro
            </button>
          </div>
        ) : (
          <div className="producao-table-wrapper">
            <table className="producao-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Plataforma</th>
                  <th>Barris/Dia</th>
                  <th>m³ Gás/Dia</th>
                  <th>Total Produção</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {producaoList.map((item) => (
                  <tr key={item.id}>
                    <td className="date">{new Date(item.dataProducao).toLocaleDateString('pt-BR')}</td>
                    <td className="platform">{item.plataforma}</td>
                    <td className="number">{item.barrisPetroleo.toFixed(2)}</td>
                    <td className="number">{item.metrosCubicosGas.toFixed(2)}</td>
                    <td className="total">
                      <span className="badge">
                        {(item.barrisPetroleo + item.metrosCubicosGas).toFixed(2)} unidades
                      </span>
                    </td>
                    <td className="actions">
                      <button className="btn-icon" title="Ver detalhes">👁️</button>
                      <button className="btn-icon btn-danger" title="Deletar" onClick={() => {
                        if (window.confirm('Tem certeza que deseja deletar?')) {
                          producaoAPI.deletar(item.id).then(() => carregarProducao());
                        }
                      }}>🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* RESUMO ESTATÍSTICO */}
      {producaoList.length > 0 && (
        <section className="producao-stats">
          <h2>Resumo Estatístico</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total de Registros</h3>
              <p className="stat-value">{producaoList.length}</p>
            </div>
            <div className="stat-card">
              <h3>Média Barris/Dia</h3>
              <p className="stat-value">
                {(producaoList.reduce((acc, p) => acc + p.barrisPetroleo, 0) / producaoList.length).toFixed(2)}
              </p>
            </div>
            <div className="stat-card">
              <h3>Média Gás/Dia</h3>
              <p className="stat-value">
                {(producaoList.reduce((acc, p) => acc + p.metrosCubicosGas, 0) / producaoList.length).toFixed(2)}
              </p>
            </div>
            <div className="stat-card highlight">
              <h3>Total Produção</h3>
              <p className="stat-value">
                {producaoList.reduce((acc, p) => acc + p.barrisPetroleo + p.metrosCubicosGas, 0).toFixed(2)}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
