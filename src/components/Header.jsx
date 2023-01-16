import React from "react"; 
import Logo from "../assets/LogoKasa.png"; 
import {Link} from "react-router-dom"; 

const Header = () => { 
    return(
        <header>
            <nav>
                <img className="header__logo" src={Logo} alt="Kasa Logo header"></img>
                <ul>
                    <li>
                        <Link to="/" className="header__menu">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="header__menu">
                            À Propos
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;