import "./Header.css";
import Logo from "../../assets/logo.png";

function Header() {
    return (
        <header>
            <img id="header-logo" src={Logo} alt="Logo Kasa" />
            <nav id="header-menu">
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>Réglage</li>
                    <li>Communauté</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
