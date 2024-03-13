import React from 'react'
import './AboutMe.css'
import codingImg from '../assets/coding.png'
import debug from '../assets/debug.png'
import cdeImg from '../assets/coding (1).png'
import error from '../assets/error.png'

const AboutMe = () => {
    return (
        <section className='about-container' id='about'>
        <h2 className='about-title'>About</h2>
            <div className='about-content'>
                <img className='about-avatar' src={codingImg} alt='avatar with a laptop' />
                <ul className='about-items'>
                    <li className='about-item'>
                    <img className='about-icon' src={debug}></img>                        <div className='about-text'>
                            <h3>front-end</h3>
                            <p>React, designing, ui/ux</p>
                        </div>
                    </li>  
                    <li className='about-item'>
                        <img className='about-icon' src={cdeImg}></img>
                        <div className='about-text'>
                        <h3>back-end</h3>
                        <p>databases, secruity</p>
                        </div>
                    </li>  
                    <li className='about-item'>
                    <img className='about-icon' src={error}></img>                        <div className='about-text'>
                        <h3>testing</h3>
                        <p>jest and rspec</p>
                        </div>
                    </li>  
                </ul>
            </div>
        </section>
    )
}

export default AboutMe