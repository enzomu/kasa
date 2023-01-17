import React from "react"; 
import Logo from "../assets/LogoKasa.png"; 
import {NavLink} from "react-router-dom"; 

const Header = () => { 
    return(
        <header>
            <nav>
                <img className="header__logo" src={Logo} alt="Kasa Logo header"></img>
                <ul>
                    <li>
                        <NavLink to="/" className="header__menu">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="header__menu">
                            À Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;