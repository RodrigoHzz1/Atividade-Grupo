import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Footer({ company, year, system, support }) {
  return (
    <footer className="app-footer">
      <div className="app-footer__info">
        <span>{company}</span>
        <span>{year}</span>
      </div>
      <div className="app-footer__meta">
        <span>{system}</span>
        {support && <span>{support}</span>}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string,
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  system: PropTypes.string,
  support: PropTypes.string,
};

Footer.defaultProps = {
  company: "Atlantic Offshore Energy",
  year: new Date().getFullYear(),
  system: "Sistema Integrado de Operações - Bacia de Santos",
  support: "Suporte: engenharia@aoe.com.br",
};

export default Footer;