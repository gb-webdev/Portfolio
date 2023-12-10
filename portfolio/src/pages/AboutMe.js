import React from 'react'
import transition from '../pages/transition'
import js from '../assets/11-javascript.png'
import html from '../assets/11-html.png'
import css from '../assets/11-css.png'
import react from '../assets/11-react.png'
import ruby from '../assets/11-ruby.png'
import rails from '../assets/11-rails.png'
import rspec from '../assets/11-rspec.png'
import jest from '../assets/11-jest.png'
import postgres from '../assets/11-postgres.png'
import thoughtbot from '../assets/11-thoughtbot.png'
import bootstrap from '../assets/11-bootstrap.png'
import github from '../assets/11-github.png'
import git from '../assets/11-git.png'
import vscode from '../assets/11-vscode.png'
import linkedin from '../assets/linkedin-logo.png'
import gitlogo from '../assets/github-logo.png'
import email from '../assets/email-logo.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-div-wrap'>
            <div className='about-div'>
                <h2>Hi! Thanks for making it this far! I graduated from <a className='learn-link' href='https://learnacademy.org/coding-bootcamp' target='blank'>LEARN Academy</a> in 2023 (Echo Cohort) for Full-Stack Web Development. I also have an associates degree in Science.</h2>
                <h2>Other than coding, I'm a huge gamer and like to spend my spare time playing games (video or board games).</h2>
                <h2>My Toolkit:</h2>
            </div>
            <div className='about-div-tools'>
                <img className='icon' src={js} />
                <img className='icon' src={html} />
                <img className='icon' src={css} />
                <img className='icon' src={react} />
                <img className='icon' src={ruby} />
                <img className='icon' src={rails} />
                <img className='icon' src={rspec} />
                <img className='icon' src={jest} />
                <img className='icon' src={postgres} />
                <img className='icon' src={thoughtbot} />
                <img className='icon' src={bootstrap} />
                <img className='icon' src={github} />
                <img className='icon' src={git} />
                <img className='icon' src={vscode} />
            </div>
            <div className='h2-contact'>
                <h2>Contact me:</h2>
            </div>    
            <div className='contact-div'>
                <img className='icon-1' src={linkedin} />
                <img className='icon-2' src={gitlogo} />
            </div>
        </div>
    )
}

export default transition(AboutMe)