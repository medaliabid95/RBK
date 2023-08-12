import React from 'react'
import "./sidebar.css"
import { faLocationDot, faBorderAll, faInbox, faPeopleGroup, faDiagramProject, faFeather, faCalendar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const sidebar = () => {
    return (

        <header className='header-sidebar'>
            <a href="/"><img src="/RBK-Logo.svg" alt="RBK-LOGO" className='logo-nav' /></a>
            <div className='location'> <FontAwesomeIcon icon={faLocationDot} id='location-dot' style={{ color: "#FF007B", width: "17px" }} /> <span id='location-sidebard'>Tunis</span></div>
            <ul className='side-links'>
                <li className='side-link'><span><FontAwesomeIcon icon={faBorderAll} style={{ width: "21px" }} /></span><a href="/newStudents" className='side-anchor-link'>Tous le demandes</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faInbox} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Tous le messages</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faPeopleGroup} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Cohorts</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faFeather} style={{ width: "21px" }} /></span><a href="/addBlog" className='side-anchor-link'>Blogs</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faCalendar} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>Events</a></li>
                <li className='side-link'><span><FontAwesomeIcon icon={faDiagramProject} style={{ width: "21px" }} /></span><a href="/" className='side-anchor-link'>
                    Projet récemment publié
                </a></li>
            </ul>
        </header>

    )
}

export default sidebar