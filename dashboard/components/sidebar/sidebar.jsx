'use client'
import React from 'react';
import "./sidebar.css";

import { faLocationDot, faBorderAll, faInbox, faPeopleGroup, faDiagramProject, faFeather, faCalendar, faRightFromBracket, faPlus, faListCheck } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

const Sidebar = () => {
    const location = sessionStorage.getItem('location');
    const image = sessionStorage.getItem('image');
    const name = sessionStorage.getItem('name');

    const handleLogout = () => {
        sessionStorage.removeItem('location');
        sessionStorage.removeItem('image');
        sessionStorage.removeItem('name');
    };

    return (
        <header className='header-sidebar'>
            <a href="/newStudents"><img src="/RBK-Logo.svg" alt="RBK-LOGO" className='logo-nav' /></a>
            <div className='location'>
                <FontAwesomeIcon icon={faLocationDot} id='location-dot' style={{ color: "#FF007B", width: "17px" }} />
                <span id='location-sidebard'>{location}</span>
            </div>
            <ul className='side-links'>

                <li className='side-link'><span><FontAwesomeIcon icon={faBorderAll} style={{ width: "21px" }} /></span><a href="/allStudents" className='side-anchor-link'>Tous les demandes</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faInbox} style={{ width: "21px" }} /></span><a href="/chat" className='side-anchor-link'>Tous les messages</a></li>

                <li className='side-link'><span><FontAwesomeIcon icon={faPeopleGroup} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Cohorts</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faFeather} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Blogs</a><ul className='side-bar-submenu'><li className='sb-submenu-link'><span className="sub-menu-icon"><FontAwesomeIcon icon={faPlus} style={{ color: "#000000", width: "15px" }} /></span><a href="/addBlog" className='sb-link'>Créer un Blog</a></li><li className='sb-submenu-link'><span className="sub-menu-icon"><FontAwesomeIcon icon={faListCheck} style={{ color: "#000000", width: "15px" }} /></span><a href="" className='sb-link'>Modifier Blogs</a></li></ul></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faCalendar} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Events</a><ul className='side-bar-submenu'><li className='sb-submenu-link'><span className="sub-menu-icon"><FontAwesomeIcon icon={faPlus} style={{ color: "#000000", width: "15px" }} /></span><a href="/addEvent" className='sb-link'>Créer un event</a></li><li className='sb-submenu-link'><span className="sub-menu-icon"><FontAwesomeIcon icon={faListCheck} style={{ color: "#000000", width: "15px" }} /></span><a href="/manageEvent" className='sb-link'>Gérer Events</a></li></ul></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faDiagramProject} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>
                    Projets récemments publiés
                </a><ul className='side-bar-submenu'><li className='sb-submenu-link'><span className="sub-menu-icon"><FontAwesomeIcon icon={faPlus} style={{ color: "#000000", width: "15px" }} /></span><a href="" className='sb-link'>Créer un Projet</a></li><li className='sb-submenu-link'><span className="sub-menu-icon"><FontAwesomeIcon icon={faListCheck} style={{ color: "#000000", width: "15px" }} /></span><a href="" className='sb-link'>Gérer Projects</a></li></ul></li>
            </ul>
            <div className='profile-container'>
                <img src={image} alt="" />
                <p className='profile-Fullname'>{name}</p>
                <Link href='/'><div onClick={handleLogout}><FontAwesomeIcon className="logout-icon" icon={faRightFromBracket} /></div></Link>
            </div>
        </header>
    );
}

export default Sidebar;
