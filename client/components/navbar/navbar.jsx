"use client"
import React, { useRef ,useState} from 'react'
import "./navbar.css"
import Button from '../Universal button/button'
const navbar = () => {
    const [nav,setNav]=useState(false)
    const navRef = useRef()
    const btnRef = useRef()
    const btn2Ref = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle("active")
        btnRef.current.classList.toggle("active")
        btn2Ref.current.classList.toggle("active")

    }

    const changeBackground=()=>{
        if(window.scrollY >= 90){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }
    window.addEventListener("scroll",changeBackground)

    return (
        <header className={nav ? "header activated" : "header"}>
            <a href="http://localhost:3000/"><img src="./RBK-Logo.svg" alt="Logo" className='logo' /></a>
            <nav className='nav-links' >
                <ul ref={navRef} className='nav-menu' style={nav ? {backgroundColor:"white"}:{backgroundColor:"transparent"}}>
                    <li id='nos-programmes'><a href="#" className='nav-link' style={nav ? {color:"black"}:{color:"white"}} >Nos programmes</a><ul id="submenu">
                        <li><a href="/fullStack" className='nav-link' >Développeur web</a></li>
                        <li><a href="/Aws" className='nav-link' >Cloud computing AWS re/start</a></li>
                    </ul></li>
                    <li id='nos-bootcamps'>
                        <a href="#" className='nav-link' style={nav ? {color:"black"}:{color:"white"}} >Nos BootCamps</a>
                        <ul id="submenu">
                            <li><a href="#" >RebootKamp El Gazala</a></li>
                            <li><a href="#">RebootKamp Sousse</a></li>
                            <li><a href="#">RebootKamp El Kef</a></li>
                        </ul>
                    </li>
                    <li id='contact'><a href="/contact" className='nav-link' style={nav ? {color:"black"}:{color:"white"}} >Contact</a></li>
                    <li id='autres'><a href="#" className='nav-link' style={nav ? {color:"black"}:{color:"white"}} >Autres</a>
                        <ul id="submenu">
                            <li><a href="/continuer-a-letranger">Continuer a l’étranger</a></li>
                            <li><a href="#">Projets récemment publiés</a></li>
                            <li><a href="/emploi-apres-diplome">Emploi après diplome</a></li>
                            <li><a href="#">Events</a></li>
                            <li><a href="#">Blog</a></li>

                        </ul> </li>
                </ul>
            </nav>
            <div ref={btn2Ref} className='buttons'>



                <a href="/postuler" className='btn'><Button label={"Inscription"} nav={nav} /></a>

                <a href="#" className='btn'><Button label={"Login"}  nav={nav} /></a>
            </div>
            <div className='hamburger' ref={btnRef} onClick={(e) => {
                showNavbar();
            }} >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>
        </header>

    )
}

export default navbar
