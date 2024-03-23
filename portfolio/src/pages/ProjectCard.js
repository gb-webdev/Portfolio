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
                <img className='proj-img' src={bladeBrawlerStill}></img>
                <h3>Blade Brawler</h3>
                <p>A 2d duel fighting platform game</p>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <img className='proj-img' src={quizStill}></img>
                <h3>Quizard</h3>
                <p>A flashcard and quiz applicatiion, sprinkled with some game elements</p>
                <ul>
                    <li></li>
                </ul>
            </div>
            <div>
                <img className='proj-img' src={apartmentStill}></img>
                <h3>Apartment Finder</h3>
                <p>An apartment app, upload and manage properties, or find a place to rent.</p>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard