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
            <div>
                <img
                    className='proj-img'
                    src={bladeBrawlerStill}
                    alt='Image of the Blade Brawler application'   
                />
                <h3 className='card-title'>Blade Brawler</h3>
                <p className='card-description'>A 2d duel fighting platform game</p>
                <ul className='card-skills'>
                    <li></li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link'></a>
                    <a className='proj-card-link'></a>
                </div>
            </div>
            <div>
                <img
                    className='proj-img'
                    src={quizStill}
                    alt='Image of the Quizard application'   
                />
                <h3 className='card-title'>Quizard</h3>
                <p className='card-description'>A flashcard and quiz applicatiion, sprinkled with some game elements</p>
                <ul className='card-skills'>
                    <li></li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link'></a>
                    <a className='proj-card-link'></a>
                    <a className='proj-card-link'></a>
                </div>
            </div>
            <div>
                <img
                    className='proj-img'
                    src={apartmentStill}
                    alt='Image of the apartment application'   
                />
                <h3 className='card-title'>Apartment Finder</h3>
                <p className='card-description'>An apartment app, upload and manage properties, or find a place to rent.</p>
                <ul className='card-skills'>
                    <li></li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link'></a>
                    <a className='proj-card-link'></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard