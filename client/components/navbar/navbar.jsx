"use client"
import React, { useState } from 'react'
import "./navbar.css"
import hover from '@/app/utils/hover'
const navbar = () => {
    const [color, setColor] = useState(false)
    const [npDropDown, setNpDropDown] = useState(false)
    const [nbDropDown, setNbDropDown] = useState(false)
    const [autresDropDown, setAutresDropDown] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 200) {
            setColor(true);
        } else setColor(false);
    }
    window.addEventListener("scroll", changeColor)
    return (
        <header className={color ? "header-nav header-bg" : "header-nav"}>
            <a href="http://localhost:3000/"><img src="RBK-Logo.svg" alt="" className='logo-nav' /></a>
            <ul className='nav-links'>
                {color ? (<li className="nav-link" ><a href="#" style={{ color: "black" }}>Acceuil</a></li>) : (<li className="nav-link"><a href="#">Acceuil</a></li>)}
                {color ? (<li className="nav-link" ><a href="#" style={{ color: "black" }} className='sub-menu-arrow-black'>Nos programmes</a></li>) : (<li className="nav-link"><a href="#" className='sub-menu-arrow-white'>  Nos programmes</a></li>)}
                {color ? (<li className="nav-link" ><a href="#" style={{ color: "black" }} className='sub-menu-arrow-black'>Nos BootCamps</a></li>) : (<li className="nav-link"><a href="#" className='sub-menu-arrow-white'>Nos BootCamps</a></li>)}
                {color ? (<li className="nav-link" ><a href="#" style={{ color: "black" }}>Emploi après diplome</a></li>) : (<li className="nav-link"><a href="#">Emploi après diplome</a></li>)}
                {color ? (<li className="nav-link" ><a href="#" style={{ color: "black" }}>Contact</a></li>) : (<li className="nav-link"><a href="#">Contact</a></li>)}
                {color ? (<li className="nav-link" ><a href="#" style={{ color: "black", }} className='sub-menu-arrow-black'>Autres</a></li>) : (<li className="nav-link"><a href="#" className='sub-menu-arrow-white'>Autres</a></li>)}
            </ul>
            <div className='navbar-buttons-container'>
                <button>ssss</button>
                <button>ssss</button>
            </div>
        </header >

    )
}

export default navbar