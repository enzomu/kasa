import React from 'react'
import Logo from '../assets/LogoKasaWhite.png'

const Footer = () => {
    return (
        <footer>
            <div className="footer-logo">
                <img src={Logo} alt="Kasa Logo footer"></img>
            </div>
            <p className="footer-text"> © 2020 Kasa. All rights reserved </p>
        </footer>
    )
}

export default Footer
