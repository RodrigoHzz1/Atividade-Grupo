import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Input({
  id,
  label,
  value,
  onChange,
  type,
  placeholder,
  error,
  helpText,
  disabled,
}) {
  return (
    <div className="form-field">
      {label && (
        <label htmlFor={id} className="form-field__label">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`form-field__input ${
          error ? "form-field__input--error" : ""
        }`}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        disabled={disabled}
      />
      {helpText && <small className="form-field__help">{helpText}</small>}
      {error && <span className="form-field__error">{error}</span>}
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["text", "number", "email", "password", "search"]),
  placeholder: PropTypes.string,
  error: PropTypes.string,
  helpText: PropTypes.string,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  label: "",
  type: "text",
  placeholder: "",
  error: "",
  helpText: "",
  disabled: false,
};

export default Input;