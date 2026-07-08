import React, { useState } from 'react';

// Importação dos Componentes de Layout Globais (Enviados por você)
import Header from './components/Header'; // Ajuste o caminho conforme suas pastas[cite: 12]
import Navbar from './components/Navbar'; //[cite: 9]
import Footer from './components/Footer'; //[cite: 8]

// Importação das 7 Páginas Obrigatórias
import Home from './Home';
import QuemSomos from './QuemSomos';
import Incidentes from './Incidentes';
import Manutencao from './Manutencao';
import Producao from './Producao';
import Tripulacao from './Tripulacao';
import Contato from './Contato';

import './App.css'; 

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Simulação de usuário logado (pode vir de um estado global depois)
  const user = { name: "Eng. Pedro Silva" };

  const navigationItems = [
    { key: 'home', label: 'Dashboard' },
    { key: 'quem-somos', label: 'Quem Somos / Sustentabilidade' },
    { key: 'incidentes', label: 'Mapear Incidente (HSE)' },
    { key: 'manutencao', label: 'Solicitar Manutenção' },
    { key: 'producao', label: 'Produção Diária' },
    { key: 'tripulacao', label: 'Escala de Tripulação' },
    { key: 'contato', label: 'Contatos de Emergência' },
  ];

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'quem-somos': return <QuemSomos />;
      case 'incidentes': return <Incidentes />;
      case 'manutencao': return <Manutencao />;
      case 'producao': return <Producao />;
      case 'tripulacao': return <Tripulacao />;
      case 'contato': return <Contato />;
      default: return <Home />;
    }
  };

  return (
    <div className="app-container">
      {/* Componente Header oficial do time integrado */}
      <Header 
        title="Atlantic Offshore Energy" 
        subtitle="Bacia de Santos • Sistema Integrado de Operações"
        userName={user.name}
        onLogout={() => alert('Efetuando logout do sistema offshore...')}
      />

      {/* Componente Navbar do time */}
      <Navbar 
        items={navigationItems} 
        activeKey={currentPage} 
        onSelect={(key) => setCurrentPage(key)} 
      />

      {/* Conteúdo Principal */}
      <main className="app-main-content">
        {renderPage()}
      </main>

      {/* Componente Footer do time */}
      <Footer 
        company="Atlantic Offshore Energy SA"
        year={2026}
        system="Plataforma de Monitoramento de Ativos & HSE"
      />
    </div>
  );
}