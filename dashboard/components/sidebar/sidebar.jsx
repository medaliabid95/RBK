'use client'
import React from 'react';
import "./sidebar.css";
import { faLocationDot, faBorderAll, faInbox, faPeopleGroup, faDiagramProject, faFeather, faCalendar, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
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
            <a href="/"><img src="/RBK-Logo.svg" alt="RBK-LOGO" className='logo-nav' /></a>
            <div className='location'>
                <FontAwesomeIcon icon={faLocationDot} id='location-dot' style={{ color: "#FF007B", width: "17px" }} />
                <span id='location-sidebard'>{location}</span>
            </div>
            <ul className='side-links'>
                <li className='side-link'><span><FontAwesomeIcon icon={faBorderAll} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Tous le demandes</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faInbox} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Tous le messages</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faPeopleGroup} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Cohorts</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faFeather} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Blogs</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faCalendar} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Events</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faDiagramProject} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>
                    Projet récemment publié
                </a></li>
            </ul>
            <div className='profile-container'>
                <img src={image} alt="" />
                <p className='profile-Fullname'>{name}</p>
            </div>
            <Link href='/'><div onClick={handleLogout}><FontAwesomeIcon className="logout-icon" icon={faRightFromBracket} /></div></Link>
        </header>
    );
}

export default Sidebar;
