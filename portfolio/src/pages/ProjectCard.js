import React from 'react'
import quizStill from '../assets/quiz-still.png'
import quizGif from '../assets/quiz.gif'
import apartmentStill from '../assets/apartment-still.png'
import apartmentGif from '../assets/apartment.gif'
import bladeBrawlerStill from '../assets/blade-brawler-still.png'
import bladeBrawlerGif from '../assets/blade-brawler.gif'
import './ProjectCard.css'

const ProjectCard = () => {
    return (
        <div className='card-container'>
            <div className='card'>
                <img
                    className='proj-img'
                    src={bladeBrawlerStill}
                    alt='Image of the Blade Brawler application'   
                />
                <h3 className='card-title'>Blade Brawler</h3>
                <p className='card-description'>A 2d duel fighting game</p>
                <ul className='card-skills'>
                    <li className='proj-skill'>JavaScript</li>
                    <li className='proj-skill'>GSAP</li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link' href='https://github.com/gb-webdev/blade-brawler' target='blank'>Source</a>
                    <a className='proj-card-link' href='https://blade-brawler.netlify.app' target='blank'>Play!</a>
                </div>
            </div>
            <div className='card'>
                <img
                    className='proj-img'
                    src={quizStill}
                    alt='Image of the Quizard application'   
                />
                <h3 className='card-title'>Quizard</h3>
                <p className='card-description'>A flashcard and quiz applicatiion, sprinkled with some game elements</p>
                <ul className='card-skills'>
                    <li className='proj-skill'>Ruby on Rails</li>
                    <li className='proj-skill'>PostgreSQL</li>
                    <li className='proj-skill'>React</li>
                    <li className='proj-skill'>GSAP</li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link' href='https://github.com/learn-stack-rgb/quizard-backend' target='blank'>B-E Source</a>
                    <a className='proj-card-link' href='https://github.com/learn-stack-rgb/quizard-frontend' target='blank'>F-E Source</a>
                    <a className='proj-card-link' href='https://quizard-u7md.onrender.com/' target='blank'>Play!</a>
                </div>
            </div>
            <div className='card'>
                <img
                    className='proj-img'
                    src={apartmentStill}
                    alt='Image of the apartment application'   
                />
                <h3 className='card-title'>Apartment Finder</h3>
                <p className='card-description'>An apartment app, find a place to rent, or manage your own properties.</p>
                <ul className='card-skills'>
                    <li className='proj-skill'>Ruby on Rails</li>
                    <li className='proj-skill'>PostgreSQL</li>
                    <li className='proj-skill'>React</li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link' href='https://github.com/learn-academy-2023-echo/apartment-app-backend-zilflowlist' target='blank'>B-E Source</a>
                    <a className='proj-card-link' href='https://github.com/learn-academy-2023-echo/apartment-app-frontend-zilflowlist' target='blank'>F-E Source</a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard