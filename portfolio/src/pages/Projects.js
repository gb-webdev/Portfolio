import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
    return (
        <section className='projects-container' id='projects'>
            <h2 className='projects-title'>Projects</h2>
            <div className='projects-content'>
                <ProjectCard />
            </div>
        </section>
    )
}

export default Projects