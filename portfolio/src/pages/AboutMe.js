import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
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

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_49fw4pc', 'template_v3ykkjl', form.current, 'dKtLzJYFF9jUU-bGF')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
          e.target.reset()
          alert('Thanks, your email has been sent')
      }

    return (
        <div className='about-div-wrap'>
            <br></br>
            <div className='about-div'>
                <h2>Hi! Thanks for making it this far! I graduated from <a className='learn-link' href='https://learnacademy.org/coding-bootcamp' target='blank'>LEARN Academy</a> in 2023 (Echo Cohort), specializing in Full-Stack Web Development and I hold an A.S. from Southport College. Outside of coding, I'm and avid gamer (video & board games) and like to be outdoors with my dogs. As a junior developer, I've honed my skills through various projects, an internship and independent contracts, contributing to diverse code bases. Let's connect!</h2>
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
                <a href='https://www.linkedin.com/in/graham-blundell/' target='blank'><img className='icon-1' src={linkedin} /></a>
                <a href='https://github.com/gb-webdev' target='blank'><img className='icon-2' src={gitlogo} /></a>
            </div>
            <div className='email-div'>
                <form className='email-form' ref={form} onSubmit={sendEmail}>
                    <input className='input-form' type='text' placeholder='Full Name...' name='user_name' required />
                    <input className='input-form' type='email' placeholder='Email...' name='user_email' required />
                    <input className='input-form' type='text' placeholder='Subject...' Subject='Email' name='user_subject' required />
                    <textarea className='input-form-txt' name='message' cols='30' rows='10' placeholder='Message...'></textarea>
                    <button className='email-button' type='submit'>Send Email</button>
                </form>
            </div>
        </div>
    )
}

export default transition(AboutMe)