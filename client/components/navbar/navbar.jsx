"use client"
import React from 'react'
import "./navbar.css"
import Button from '../Universal button/button'
const navbar = () => {
    const hamburger = document.querySelector(".hamburger");
    console.log(hamburger);
    const navMenu = document.querySelector(".nav-menu");
    console.log(navMenu);
    hamburger?.addEventListener("click", () => {
        console.log("a");
        // hamburger.classList.add("active")
        navMenu.classList.toggle("active")
    })
    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))
    return (
        <header className='header'>
            <img src="./RBK-Logo.svg" alt="Logo" className='logo' />
            <nav className='nav-links'>
                <ul className='nav-menu'>
                    <li><a href="#" className='nav-link'>Nos programmes</a><ul id="submenu">
                        <li><a href="#" className='nav-link'>Développeur web</a></li>
                        <li><a href="#" className='nav-link'>Cloud computing AWS re/start</a></li>
                    </ul></li>
                    <li>
                        <a href="#" className='nav-link'>Nos BootCamps</a>
                        <ul id="submenu">
                            <li><a href="#" >RebootKamp El Gazala</a></li>
                            <li><a href="#">RebootKamp Sousse</a></li>
                            <li><a href="#">RebootKamp El Kef</a></li>
                        </ul>
                    </li>
                    <li><a href="#" className='nav-link'>Contact</a></li>
                    <li><a href="#" className='nav-link'>Autres</a>
                        <ul id="submenu">
                            <li><a href="#">Continuer a l’étranger</a></li>
                            <li><a href="#">Projets récemment publiés</a></li>
                            <li><a href="#">Emploi après diplome</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>

                        </ul> </li>
                </ul>
            </nav>
            <div className='buttons'>
                <a href="#" className='btn'><Button label={"Inscription"} /></a>
                <a href="#" className='btn'><Button label={"Login"} /></a>
            </div>
            <div className='hamburger' >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </header>

    )
}

export default navbar
