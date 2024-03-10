import React from 'react'
import './AboutMe.css'
import liz from '../assets/pixel-liz.png'
import ruby from '../assets/11-ruby.png'

const AboutMe = () => {
    return (
        <section className='about-container' id='about'>
        <h2 className='about-title'>About</h2>
            <div className='about-content'>
                <img className='about-avatar' src={liz} alt='avatar with a laptop' />
                <ul className='about-items'>
                    <li className='about-item'>
                    <img className='about-icon' src={ruby}></img>                        <div className='about-text'>
                            <h3>front-end</h3>
                            <p>React, designing, ui/ux</p>
                        </div>
                    </li>  
                    <li className='about-item'>
                        <img className='about-icon' src={ruby}></img>
                        <div className='about-text'>
                        <h3>back-end</h3>
                        <p>databases, secruity</p>
                        </div>
                    </li>  
                    <li className='about-item'>
                    <img className='about-icon' src={ruby}></img>                        <div className='about-text'>
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