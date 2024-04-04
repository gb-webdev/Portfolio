import React from 'react'
import './Avatar.css'
import avatarImage from '../assets/avatar.png'

const Avatar = () => {
    return (
        <section className='avatar-container'>
            <div className='avatar-content' >
                <h1 className='avatar-title'>Hi I'm Graham</h1>
                <p className='avatar-description'>I'm a Full-Stack Developer in Ruby on Rails and React</p>
                <a className='avatar-contact' href='#contact'>Contact me here</a>
            </div>
            <img className='avatar-img' src={avatarImage} alt='an Avatar of me'/>
            <div className='avatar-topBlur ' />
            <div className='avatar-bottomBlur ' />
        </section>
    )
}

export default Avatar