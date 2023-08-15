import React from 'react'
import Cards from '@/components/Recent-Projects-components/cards/cards'
import "./recentProjects.css"

const getProjects = async () => {
    const response = await fetch(`http://localhost:3001/projects/getAll`, { cache: "no-cache" })
    return response.json()
}

const page = async () => {
    const project = await getProjects()
    return (
        <div className='recent-projects-container'>
            <section className='image-recentP-container' >
                <img src="/images/20567151.png" alt="projects" />

            </section>
            <section className='cards-section-container'>
                <Cards data={project} />
            </section>
        </div>
    )
}

export default page