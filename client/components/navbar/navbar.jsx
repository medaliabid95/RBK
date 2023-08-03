"use client"
import React from 'react'
import "./navbar.css"
import Button from '../Universal button/button'
const navbar = () => {
    return (
        <header>
            <img src="./RBK-Logo.svg" alt="Logo" className='logo' />
            <nav className='nav-links'>
                <ul>
                    <li><a href="#">Nos programmes</a><ul id="submenu">
                        <li><a href="#">Développeur web</a></li>
                        <li><a href="#">Cloud computing AWS re/start</a></li>
                    </ul></li>
                    <li>
                        <a href="#">Nos BootCamps</a>
                        <ul id="submenu">
                            <li><a href="#">RebootKamp El Gazala</a></li>
                            <li><a href="#">RebootKamp Sousse</a></li>
                            <li><a href="#">RebootKamp El Kef</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Emploi après diplome</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Autres</a>
                        <ul id="submenu">
                            <li><a href="#">Continuer a l’étranger</a></li>
                            <li><a href="#">Projets récemment publiés</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>

                        </ul> </li>
                </ul>
            </nav>
            <div className='buttons'>
                <a href="#" className='btn'><Button label={"Inscription"} /></a>
                <a href="#" className='btn'><Button label={"Login"} /></a>
            </div>
        </header>

    )
}

export default navbar
