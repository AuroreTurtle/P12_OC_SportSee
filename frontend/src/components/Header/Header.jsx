// Import CSS
import "./Header.css";

//Import logo
import Logo from "../../assets/logo.png";

/**
 * It returns React Component that displays the header.
 * @returns A React component
 */
function Header() {
    return (
        <header>
            <img id="header-logo" src={Logo} alt="Logo SportSee" />
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
