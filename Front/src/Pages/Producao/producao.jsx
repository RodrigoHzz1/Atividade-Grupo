import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './producao.css';

export default function Producao() {
  const [producoes, setProducoes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/producao')
      .then(response => setProducoes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="page-container table-page">
      <h2>Monitoramento de Produção Diária</h2>
      <table className="aoe-table">
        <thead>
          <tr>
            <th>Plataforma</th>
            <th>Petróleo (bbl)</th>
            <th>Gás Natural (m³)</th>
            <th>Data Apuração</th>
            <th>Status de Meta</th>
          </tr>
        </thead>
        <tbody>
          {producoes.map((item) => (
            <tr key={item.id}>
              <td><strong>{item.plataforma}</strong></td>
              <td>{item.barrisPetroleo.toLocaleString()}</td>
              <td>{item.metrosCubicosGas.toLocaleString()}</td>
              <td>{new Date(item.dataProducao).toLocaleDateString('pt-BR')}</td>
              <td>
                <span className={`status-badge ${item.metaAtingida ? 'success' : 'pending'}`}>
                  {item.metaAtingida ? 'Meta Superada' : 'Em Ajuste'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}   