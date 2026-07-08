import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Navbar({ items, activeKey, onSelect }) {
  return (
    <nav className="app-navbar" aria-label="Navegação principal">
      <ul className="app-navbar__list">
        {items.map((item) => (
          <li key={item.key} className="app-navbar__item">
            <button
              type="button"
              className={`app-navbar__link ${
                activeKey === item.key ? "app-navbar__link--active" : ""
              }`}
              onClick={() => onSelect(item.key)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeKey: PropTypes.string,
  onSelect: PropTypes.func,
};

Navbar.defaultProps = {
  activeKey: "",
  onSelect: () => {},
};

export default Navbar;