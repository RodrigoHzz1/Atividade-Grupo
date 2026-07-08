import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

function Header({ title, subtitle, userName, onLogout, onToggleMenu }) {
	return (
		<header className="app-header">
			{/* logotipo compacto */}
			<div className="app-header__logo" aria-hidden="true">AOE</div>

			<div className="app-header__brand">
				<strong className="app-header__title">{title}</strong>
				{subtitle && <span className="app-header__subtitle">{subtitle}</span>}
			</div>

			<div className="app-header__actions">
				<button
					type="button"
					className="app-header__menu-button"
					onClick={onToggleMenu}
					aria-label="Abrir menu de navegação"
				>
					☰
				</button>

				<div className="app-header__user">
					<span className="app-header__user-name">{userName}</span>
					<button
						type="button"
						className="app-header__logout"
						onClick={onLogout}
					>
						Sair
					</button>
				</div>
			</div>
		</header>
	);
}

Header.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	userName: PropTypes.string,
	onLogout: PropTypes.func,
	onToggleMenu: PropTypes.func,
};

Header.defaultProps = {
	title: "AOE - Sistema Integrado",
	subtitle: "Gestão de produção, tripulação e segurança",
	userName: "Usuário",
	onLogout: null,
	onToggleMenu: null,
};

export default Header;