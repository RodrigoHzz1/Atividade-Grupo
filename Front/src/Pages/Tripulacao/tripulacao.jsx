import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './tripulacao.css';

export default function Tripulacao() {
  const [tripulantes, setTripulantes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/tripulacao')
      .then(response => setTripulantes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="page-container table-page">
      <h2>Escala de Embarque e Tripulação</h2>
      <table className="aoe-table">
        <thead>
          <tr>
            <th>Nome do Funcionário</th>
            <th>Função Técnica</th>
            <th>Unidade</th>
            <th>Início Confinamento</th>
            <th>Término Confinamento</th>
          </tr>
        </thead>
        <tbody>
          {tripulantes.map((func) => (
            <tr key={func.id}>
              <td><strong>{func.nome}</strong></td>
              <td>{func.funcao}</td>
              <td>{func.plataforma}</td>
              <td>{new Date(func.dataInicio).toLocaleDateString('pt-BR')}</td>
              <td>{new Date(func.dataFim).toLocaleDateString('pt-BR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}