import React from 'react'
import './AboutMe.css'
import codingImg from '../assets/coding.png'
import cdeImg from '../assets/coding2.png'
import error from '../assets/error.png'
import qrCode from '../assets/QRCode.png'

const AboutMe = () => {
    return (
        <section className='about-container' id='experience'>
        <h2 className='about-title'>Experience</h2>
            <div className='about-content'>
                <ul className='about-items'>
                    <li className='about-item'>
                    <img className='about-icon' src={error}></img>                        <div className='about-text'>
                            <h3>Scientist.com</h3>
                            <h4>Software Developer Intern</h4>
                            <p>Ruby on Rails | RSpec | Refactoring | Testing | Debugging | FactoryBot</p>
                        </div>
                    </li>  
                    <li className='about-item'>
                        <img className='about-icon' src={cdeImg}></img>
                        <div className='about-text'>
                        <h3>Harvard CS50 Course</h3>
                        <h4>Introduction to Computer Science</h4>
                        <p>C | Python | Low level operations</p>
                        </div>
                    </li>  
                    <li className='about-item'>
                    <img className='about-icon' src={codingImg}></img>                        <div className='about-text'>
                        <h3>LEARN Academy</h3>
                        <h4>Full-Stack Web Developer course</h4>
                        <p>Ruby on Rails | React | RSpec | Jest</p>
                        </div>
                    </li> 
                    <li className='resume'>
                        <h3>See my <a className='resume-link' href='https://graham-blundell-cv.tiiny.site/' target='blank'>resume</a> for more</h3>
                        <img className='qr-code' src={qrCode} />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutMe