import React from 'react'
import FilteredCards from "../filteredCards/filteredCards.jsx"
import "../filteredCards/filteredCards.css"
const filtered = ({ projects }) => {
    return (
        <section className='cards-section-container'>
            <FilteredCards projects={projects} />
        </section>
    )
}

export default filtered
