import React from 'react';
import './Projects.css'
import quizard from '../assets/quizard-homescreen.png'

const Projects = () => {
    return (
        <div className='projects-div'>
            <h1>Hover over my projects to learn more!</h1>
            <div>
                <h1 className='project-1'>Quizard</h1><a href='https://quizard-u7md.onrender.com/' target='blank'><img className='quizard' src={quizard} alt='Quizard app logo' /></a>
            </div>
        </div> 
    )
}

export default Projects