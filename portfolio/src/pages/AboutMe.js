import React from 'react'
import transition from '../pages/transition'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='about-div-wrap'>
            <div className='about-div'>
                <h1>Info about me</h1>
            </div>    
        </div>
    )
}

export default transition(AboutMe)