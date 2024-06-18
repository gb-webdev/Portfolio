import React from 'react'
import './Experience.css'
import postgres from '../assets/11-postgres.png'
import rails from '../assets/11-rails.png'
import reactImg from '../assets/11-react.png'
import ruby from '../assets/11-ruby.png'
import node from '../assets/11-node.png'
import typescript from '../assets/11-typescript.png'

const Experience = () => {
    return (
        <section className='experience-container' id='toolkit'>
            <h2 className='experience-title'>My Toolkit</h2>
            <div className='experience-content'>
                <div className='experience-skills'>
                    <ul className='skill-list'>
                        <li className='skill'><img className='xp-img' src={reactImg} /></li>
                        <li className='skill'><img className='xp-img' src={ruby} /></li>
                        <li className='skill'><img className='xp-img2' src={rails} /></li>
                        <li className='skill'><img className='xp-img' src={postgres} /></li>
                        <li className='skill'><img className='xp-img' src={node} /></li>
                        <li className='skill'><img className='xp-img' src={typescript} /></li>                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Experience