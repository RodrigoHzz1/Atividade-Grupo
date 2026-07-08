import React, { useState } from "react";

// Importação dos Componentes de Layout Globais (Enviados por você)
import Header from "./Componentes/Header/index";
import Navbar from "./Componentes/Navbar/index";
import Footer from "./Componentes/Footer/index";

// Importação das 7 Páginas Obrigatórias
import Home from './Pages/Home/index';
import QuemSomos from './Pages/QuemSomos/index';
import Incidentes from './Pages/Incidentes/index';
import Manutencao from './Pages/Manutencao/index';
import Producao from './Pages/Producao/index';
import Tripulacao from './Pages/Tripulacao/index';
import Contato from './Pages/Contato/index';

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