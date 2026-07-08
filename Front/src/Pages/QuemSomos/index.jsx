import React from 'react';
import './quem-somos.css';

export default function QuemSomos() {
  return (
    <div className="quem-somos-page">
      <section className="company-hero">
        <h1>Quem Somos</h1>
        <p>Atlantic Offshore Energy - Liderança em Operações Offshore</p>
      </section>

      <section className="company-content">
        <div className="content-block">
          <h2>Sobre a Atlantic Offshore Energy</h2>
          <p>
            A Atlantic Offshore Energy é uma empresa líder em operações de exploração e produção
            de óleo e gás na Bacia de Santos. Com mais de 25 anos de experiência, nossos especialistas
            garantem operações seguras, eficientes e sustentáveis.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>🛡️ Segurança</h3>
            <p>Segurança em primeiro lugar em todas as operações</p>
          </div>
          <div className="value-card">
            <h3>🌱 Sustentabilidade</h3>
            <p>Compromisso com o meio ambiente e comunidades locais</p>
          </div>
          <div className="value-card">
            <h3>⚡ Eficiência</h3>
            <p>Excelência operacional e otimização de recursos</p>
          </div>
          <div className="value-card">
            <h3>👥 Talento</h3>
            <p>Equipe multidisciplinar e altamente qualificada</p>
          </div>
        </div>
      </section>
    </div>
  );
}
