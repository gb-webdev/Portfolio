import React from 'react';
import './Projects.css'
import transition from '../pages/transition'
import quizard from '../assets/quizard-homescreen.png'
import lizard from '../assets/pixel-lizard.png'

const Projects = () => {
    return (
        <div className='projects-div-wrap'>
            <div className='projects-div'>
            <h2>Hover over my projects to learn more!</h2>
                <div className='project-2'>
                    <h2 >Quizard</h2><a href='https://quizard-u7md.onrender.com/' target='blank'><img className='quizard' src={lizard} alt='A pixel lizard' /></a>
                </div>
            </div>
        </div> 
    )
}

export default transition(Projects)