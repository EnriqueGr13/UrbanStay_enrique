import "./Header.css";
import logo from "../assets/logo.png";

const Header = () => {
	return (
		<header className="header">
		<div className="header__container">
			{/* Logo */}
			<div className="header__logo">
			<img src={logo} alt="UrbanStay logo" />
			<span>UrbanStay</span>
			</div>

			{/* Menú (no funcional en este hito) */}
			<nav className="header__nav">
			<ul>
				<li><a href="#">Explorar</a></li>
				<li><a href="#">Favoritos</a></li>
				<li><a href="#">Mis reservas</a></li>
				<li><a href="#">Perfil</a></li>
			</ul>
			</nav>
		</div>
		</header>
	);
};

export default Header;
