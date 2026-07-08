import React, { useState, useEffect } from 'react';
import Input from '../../Componentes/Input/index';
import { tripulacaoAPI } from '../../api';
import './tripulacao.css';

export default function Tripulacao() {
  const [showForm, setShowForm] = useState(false);
  const [tripulacaoList, setTripulacaoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [formData, setFormData] = useState({
    nomeFuncionario: '',
    funcao: '',
    plataforma: '',
    dataInicioConfinamento: '',
    dataFimConfinamento: '',
  });

  useEffect(() => {
    carregarTripulacao();
  }, []);

  const carregarTripulacao = async () => {
    setLoading(true);
    try {
      const data = await tripulacaoAPI.listar();
      setTripulacaoList(data);
    } catch (err) {
      console.error('Erro ao carregar tripulação:', err);
      setError('Erro ao carregar dados de tripulação');
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

    // Validações
    if (!formData.nomeFuncionario || !formData.funcao || !formData.plataforma || 
        !formData.dataInicioConfinamento || !formData.dataFimConfinamento) {
      setError('Todos os campos são obrigatórios');
      return;
    }

    if (formData.nomeFuncionario.length > 150) {
      setError('Nome deve ter no máximo 150 caracteres');
      return;
    }

    const dataInicio = new Date(formData.dataInicioConfinamento);
    const dataFim = new Date(formData.dataFimConfinamento);
    if (dataInicio > dataFim) {
      setError('Data de início não pode ser maior que data de fim');
      return;
    }

    try {
      await tripulacaoAPI.criar(formData);
      setSuccess('Membro adicionado à escala com sucesso!');
      setFormData({ nomeFuncionario: '', funcao: '', plataforma: '', dataInicioConfinamento: '', dataFimConfinamento: '' });
      setShowForm(false);
      await carregarTripulacao();
    } catch (err) {
      setError('Erro ao adicionar membro: ' + err.message);
    }
  };

  const calcularDias = (inicio, fim) => {
    const msPerDay = 1000 * 60 * 60 * 24;
    return Math.ceil((new Date(fim) - new Date(inicio)) / msPerDay);
  };

  const deletarMembro = async (id) => {
    if (window.confirm('Tem certeza que deseja remover este membro da escala?')) {
      try {
        await tripulacaoAPI.deletar(id);
        setSuccess('Membro removido da escala');
        await carregarTripulacao();
      } catch (err) {
        setError('Erro ao remover membro: ' + err.message);
      }
    }
  };

  return (
    <div className="tripulacao-page">
      <section className="tripulacao-header">
        <h1>👥 Escala de Tripulação</h1>
        <p className="page-subtitle">Gestão de Pessoal e Escalas de Confinamento - Bacia de Santos</p>

        <button className="btn btn-primary" onClick={() => setShowForm(!showForm)}>
          {showForm ? '✕ Cancelar' : '+ Adicionar Membro'}
        </button>
      </section>

      {/* FORMULÁRIO */}
      {showForm && (
        <section className="tripulacao-form-section">
          <h2>Adicionar Membro à Escala</h2>

          {error && <div className="alert alert-error">{error}</div>}
          {success && <div className="alert alert-success">{success}</div>}

          <form className="tripulacao-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <Input
                id="nomeFuncionario"
                label="Nome do Funcionário"
                value={formData.nomeFuncionario}
                onChange={(v) => handleChange('nomeFuncionario', v)}
                placeholder="Nome completo (máx 150 caracteres)"
              />

              <Input
                id="funcao"
                label="Função/Cargo"
                value={formData.funcao}
                onChange={(v) => handleChange('funcao', v)}
                placeholder="Ex: Operador, Supervisor, Técnico"
              />

              <Input
                id="plataforma"
                label="Plataforma"
                value={formData.plataforma}
                onChange={(v) => handleChange('plataforma', v)}
                placeholder="Ex: P-32, P-33"
              />
            </div>

            <div className="form-grid-dates">
              <Input
                id="dataInicioConfinamento"
                label="Data de Início"
                type="date"
                value={formData.dataInicioConfinamento}
                onChange={(v) => handleChange('dataInicioConfinamento', v)}
              />

              <Input
                id="dataFimConfinamento"
                label="Data de Fim"
                type="date"
                value={formData.dataFimConfinamento}
                onChange={(v) => handleChange('dataFimConfinamento', v)}
              />

              {formData.dataInicioConfinamento && formData.dataFimConfinamento && (
                <div className="dias-confinamento">
                  <label>Dias de Confinamento</label>
                  <div className="dias-value">
                    {calcularDias(formData.dataInicioConfinamento, formData.dataFimConfinamento)} dias
                  </div>
                </div>
              )}
            </div>

            <div className="form-actions">
              <button type="button" className="btn btn-outline" onClick={() => setShowForm(false)}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Adicionar à Escala
              </button>
            </div>
          </form>
        </section>
      )}

      {/* LISTAGEM */}
      <section className="tripulacao-list-section">
        <h2>Escala Atual</h2>

        {loading ? (
          <div className="loading">Carregando dados...</div>
        ) : tripulacaoList.length === 0 ? (
          <div className="empty-state">
            <p>Nenhum membro na escala</p>
            <button className="btn btn-primary" onClick={() => setShowForm(true)}>
              + Adicionar Primeiro Membro
            </button>
          </div>
        ) : (
          <div className="tripulacao-table-wrapper">
            <table className="tripulacao-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Função</th>
                  <th>Plataforma</th>
                  <th>Início</th>
                  <th>Fim</th>
                  <th>Dias</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {tripulacaoList.map((membro) => {
                  const hoje = new Date();
                  const inicio = new Date(membro.dataInicioConfinamento);
                  const fim = new Date(membro.dataFimConfinamento);
                  let status = 'Futuro';
                  let statusClass = 'futuro';

                  if (hoje >= inicio && hoje <= fim) {
                    status = 'Ativo';
                    statusClass = 'ativo';
                  } else if (hoje > fim) {
                    status = 'Finalizado';
                    statusClass = 'finalizado';
                  }

                  const dias = calcularDias(membro.dataInicioConfinamento, membro.dataFimConfinamento);

                  return (
                    <tr key={membro.id}>
                      <td className="nome">{membro.nomeFuncionario}</td>
                      <td className="funcao">{membro.funcao}</td>
                      <td className="plataforma">{membro.plataforma}</td>
                      <td className="date">{new Date(membro.dataInicioConfinamento).toLocaleDateString('pt-BR')}</td>
                      <td className="date">{new Date(membro.dataFimConfinamento).toLocaleDateString('pt-BR')}</td>
                      <td className="dias">{dias} dias</td>
                      <td>
                        <span className={`badge status-${statusClass}`}>{status}</span>
                      </td>
                      <td className="actions">
                        <button className="btn-icon" title="Ver detalhes">👁️</button>
                        <button 
                          className="btn-icon btn-danger" 
                          title="Remover"
                          onClick={() => deletarMembro(membro.id)}
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* RESUMO ESTATÍSTICO */}
      {tripulacaoList.length > 0 && (
        <section className="tripulacao-stats">
          <h2>Resumo da Escala</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total de Membros</h3>
              <p className="stat-value">{tripulacaoList.length}</p>
            </div>
            <div className="stat-card highlight">
              <h3>Membros Ativos</h3>
              <p className="stat-value">
                {tripulacaoList.filter(m => {
                  const hoje = new Date();
                  const inicio = new Date(m.dataInicioConfinamento);
                  const fim = new Date(m.dataFimConfinamento);
                  return hoje >= inicio && hoje <= fim;
                }).length}
              </p>
            </div>
            <div className="stat-card">
              <h3>Plataformas Ativas</h3>
              <p className="stat-value">
                {new Set(tripulacaoList.map(m => m.plataforma)).size}
              </p>
            </div>
            <div className="stat-card">
              <h3>Funções Diferentes</h3>
              <p className="stat-value">
                {new Set(tripulacaoList.map(m => m.funcao)).size}
              </p>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
