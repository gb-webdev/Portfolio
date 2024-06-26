import React, { useState } from 'react';
import quizStill from '../assets/qzss.png';
import quizGif from '../assets/qz.gif';
import apartmentStill from '../assets/apss.png';
import apartmentGif from '../assets/app.gif';
import bladeBrawlerStill from '../assets/bbss.png';
import bladeBrawlerGif from '../assets/samurai.gif';
import './ProjectCard.css';

const ProjectCard = () => {
    const [over, setOver] = useState([false, false, false])
    const [imagesLoaded, setImagesLoaded] = useState(false)

    const preloadImages = () => {
        const images = [
            new Image(),
            new Image(),
            new Image()
        ];

        images[0].src = bladeBrawlerGif
        images[1].src = quizGif
        images[2].src = apartmentGif

        images.forEach(img => {
            img.onload = () => setImagesLoaded(true)
        })
    }

    useState(() => {
        preloadImages()
    }, [])

    const handleMouseEnter = (index) => {
        if (imagesLoaded) {
            const newOver = [...over]
            newOver[index] = true;
            setOver(newOver);
        }
    };

    const handleMouseLeave = (index) => {
        if (imagesLoaded) {
            const newOver = [...over];
            newOver[index] = false;
            setOver(newOver);
        }
    };

    return (
        <div className='card-container'>
            <div className='card'>
                <img
                    className='proj-img'
                    src={over[0] ? bladeBrawlerGif : bladeBrawlerStill}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={() => handleMouseLeave(0)}
                    alt='Image of the Blade Brawler application'
                />
                <h3 className='card-title'>Blade Brawler</h3>
                <p className='card-description'>A 2d duel fighting game</p>
                <ul className='card-skills'>
                    <li className='proj-skill'>JavaScript</li>
                    <li className='proj-skill'>GSAP</li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link' href='https://github.com/gb-webdev/blade-brawler' target='_blank' rel='noopener noreferrer'>Source</a>
                    <a className='proj-card-link' href='https://blade-brawler.netlify.app' target='_blank' rel='noopener noreferrer'>Play!</a>
                </div>
            </div>
            <div className='card'>
                <img
                    className='proj-img'
                    src={over[1] ? quizGif : quizStill}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={() => handleMouseLeave(1)}
                    alt='Image of the Quizard application'
                />
                <h3 className='card-title'>Quizard</h3>
                <p className='card-description'>A flashcard and quiz application, sprinkled with some game elements</p>
                <ul className='card-skills'>
                    <li className='proj-skill'>Ruby on Rails</li>
                    <li className='proj-skill'>PostgreSQL</li>
                    <li className='proj-skill'>React</li>
                    <li className='proj-skill'>GSAP</li>
                </ul>
                <div className='card-links'>
                    <a className='proj-card-link' href='https://github.com/learn-stack-rgb/quizard-backend' target='_blank' rel='noopener noreferrer'>B-E Source</a>
                    <a className='proj-card-link' href='https://github.com/learn-stack-rgb/quizard-frontend' target='_blank' rel='noopener noreferrer'>F-E Source</a>
                    <a className='proj-card-link' href='https://quizard-u7md.onrender.com/' target='_blank' rel='noopener noreferrer'>Play!</a>
                </div>
            </div>
            <div className='card'>
                <img
                    className='proj-img'
                    src={over[2] ? apartmentGif : apartmentStill}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={() => handleMouseLeave(2)}
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
                    <a className='proj-card-link' href='https://github.com/learn-academy-2023-echo/apartment-app-backend-zilflowlist' target='_blank' rel='noopener noreferrer'>B-E Source</a>
                    <a className='proj-card-link' href='https://github.com/learn-academy-2023-echo/apartment-app-frontend-zilflowlist' target='_blank' rel='noopener noreferrer'>F-E Source</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard
