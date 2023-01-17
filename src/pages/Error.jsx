import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main>
            <div className="error">
                <p className="error__number">404</p>
                <p className="error__text">
                    Oups! La page que vous demandez n'existe pas.
                </p>

                <Link to="/" className="error-link">
                    Retouner sur la page d'accueil
                </Link>
            </div>
        </main>
    )
}

export default Error
