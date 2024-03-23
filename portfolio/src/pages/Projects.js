import React from 'react'
import ProjectCard from './ProjectCard'
import './Projects.css'

const Projects = () => {
    return (
        <section>
            <h2>Projects</h2>
            <div className='projects-container'>
            < ProjectCard />
            </div>
        </section>
    )
}

export default Projects