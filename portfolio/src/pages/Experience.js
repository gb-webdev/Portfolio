import React from 'react'
import './Experience.css'
import jest from '../assets/11-jest.png'
import postgres from '../assets/11-postgres.png'
import rails from '../assets/11-rails.png'
import reactImg from '../assets/11-react.png'
import rspec from '../assets/11-rspec.png'
import ruby from '../assets/11-ruby.png'
import bootstrap from '../assets/11-bootstrap.png'

const Experience = () => {
    return (
        <section className='experience-container' id='experience'>
            <h2 className='experience-title'>My Toolkit</h2>
            <div className='experience-content'>
                <div className='experience-skills'>
                    <ul className='skill-list'>
                        <li className='skill'><img className='xp-img' src={reactImg} /></li>
                        <li className='skill'><img className='xp-img' src={ruby} /></li>
                        <li className='skill'><img className='xp-img2' src={rails} /></li>
                    </ul>
                    <ul className='skill-list'>
                        <li className='skill'><img className='xp-img' src={jest} /></li>
                        <li className='skill'><img className='xp-img' src={rspec} /></li>
                        <li className='skill'><img className='xp-img' src={postgres} /></li>
                        <li className='skill'><img className='xp-img' src={bootstrap} /></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience