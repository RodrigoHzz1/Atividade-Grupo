import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



// Importação dos componentes das 7 páginas baseadas na tua estrutura de pastas
import Home from './Pages/Home/home';
import QuemSomos from './Pages/QuemSomos/quemsomos';
import Incidentes from './Pages/Incidentes/incidentes';
import Manutencao from './Pages/Manutencao/manutencao';
import Producao from './Pages/Producao/producao';
import Tripulacao from './Pages/Tripulacao/tripulacao';
import Contato from './Pages/Contato/contato';

import './App.css';

export default function App() {
  return (
    <Router>
      {/* Barra de Navegação Corporativa (Fixa no topo do site) */}
      <header className="aoe-header">
        <div className="logo">ATLANTIC OFFSHORE ENERGY</div>
        <nav className="aoe-nav">
          <Link to="/">Dashboard</Link>
          <Link to="/quem-somos">Sustentabilidade</Link>
          <Link to="/incidentes">HSE</Link>
          <Link to="/manutencao">Manutenção</Link>
          <Link to="/producao">Produção</Link>
          <Link to="/tripulacao">Tripulação</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      {/* Conteúdo Dinâmico das Páginas */}
      <main className="aoe-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/incidentes" element={<Incidentes />} />
          <Route path="/manutencao" element={<Manutencao />} />
          <Route path="/producao" element={<Producao />} />
          <Route path="/tripulacao" element={<Tripulacao />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Rodapé Padrão do Edital */}
      <footer className="aoe-footer">
        <p>&copy; 2026 Atlantic Offshore Energy Tech - Bacia de Santos</p>
      </footer>
    </Router>
  );
}