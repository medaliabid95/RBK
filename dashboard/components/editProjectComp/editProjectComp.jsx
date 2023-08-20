"use client"
import React from 'react'
import Cards from './Recent-Projects-components/cards/cards'
import TitleText6 from './Recent-Projects-components/titleText6/titleText6'
import "./editProjectComp.css"
const editProjectComp = () => {
    return (
        <div className='recent-projects-container'>
            <section className='image-recentP-container' >
                <div className='projects-text-container'><TitleText6 /></div>
            </section>
            <section className='cards-section-container'>
                <Cards />
            </section> 
        </div>
    )
}

export default editProjectComp