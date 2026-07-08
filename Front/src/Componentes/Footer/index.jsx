import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Footer({ company, year, system, support }) {
  return (
    <footer className="app-footer">
      <div className="app-footer__left">
        <div className="app-footer__logo">AOE</div>
        <div className="app-footer__info">
          <div className="company-name">{company}</div>
          <div className="company-year">© {year}</div>
        </div>
      </div>

      <div className="app-footer__right">
        <div className="app-footer__system">{system}</div>
        {support && (
          <div className="app-footer__support">
            <a
              href="mailto:engenharia@aoe.com.br"
              className="support-link"
            >
              engenharia@aoe.com.br
            </a>
            <span className="support-sep">•</span>
            <a href="tel:+552233991000" className="support-link">
              +55 (22) 3399-1000
            </a>
          </div>
        )}
      </div>
    </footer>
  );
}

Footer.propTypes = {
  company: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  system: PropTypes.string.isRequired,
  support: PropTypes.bool,
};

Footer.defaultProps = {
  support: false,
};

export default Footer;