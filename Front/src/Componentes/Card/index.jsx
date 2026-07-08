import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Card({
  title,
  metric,
  unit,
  description,
  icon,
  status,
  onClick,
  highlight,
}) {
  return (
    <article
      className={`dashboard-card ${
        highlight ? "dashboard-card--highlight" : ""
      }`}
      role="group"
      aria-label={title}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
      onKeyDown={(event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
          onClick();
        }
      }}
    >
      <header className="dashboard-card__header">
        {icon && <span className="dashboard-card__icon">{icon}</span>}
        <div>
          <h2 className="dashboard-card__title">{title}</h2>
          {status && (
            <span
              className={`dashboard-card__status dashboard-card__status--${status}`}
            >
              {status}
            </span>
          )}
        </div>
      </header>

      <div className="dashboard-card__body">
        <div className="dashboard-card__metric">
          <strong>{metric}</strong>
          {unit && <span className="dashboard-card__unit">{unit}</span>}
        </div>
        {description && (
          <p className="dashboard-card__description">{description}</p>
        )}
      </div>
    </article>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  metric: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.node,
  status: PropTypes.oneOf(["normal", "alerta", "critico"]),
  onClick: PropTypes.func,
  highlight: PropTypes.bool,
};

Card.defaultProps = {
  unit: "",
  description: "",
  icon: null,
  status: "normal",
  onClick: null,
  highlight: false,
};

export default Card;