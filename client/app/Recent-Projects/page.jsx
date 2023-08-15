import React from 'react'
import TitleText5 from '@/components/Recent-Projects-components/titleText/titleText5'
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
                <img src="/images/projects.jpg" alt="projects" />
                <div className='projects-text-container'><TitleText5 /></div>
            </section>
            <section className='cards-section-container'>
                <Cards data={project} />
            </section>
        </div>
    )
}

export default page