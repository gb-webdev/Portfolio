import React from 'react';
import './Projects.css'
import transition from '../pages/transition'
import lizard from '../assets/pixel-lizard.png'
import gitlogo from '../assets/github-logo.png'

const Projects = () => {
    return (
        <div className='projects-div-wrap'>
            <div className='projects-div'>
            <h2>click on my projects to learn more!</h2>
                <div className='project-2'>
                    <h2 >Quizard:</h2><a href='https://quizard-u7md.onrender.com/' target='blank'><img className='quizard' src={lizard} alt='A pixel lizard' /></a>
                    <h2>Quizard Front-End source code:</h2><a href='https://github.com/learn-stack-rgb/quizard-frontend' target='blank'><img className='quizard-git-front' src={gitlogo} /></a>
                    <h2>Quizard Back-End source code:</h2><a href='https://github.com/learn-stack-rgb/quizard-backend' target='blank'><img className='quizard-git-back' src={gitlogo} /></a>
                </div>
            </div>
        </div> 
    )
}

export default transition(Projects)