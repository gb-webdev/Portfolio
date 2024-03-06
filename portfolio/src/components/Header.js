import React, { useState } from 'react'
import fish from '../assets/fish.png'
import './Header.css'


const Header = () => {
    return (
        <nav className='header-nav'>
            <a className='header-title' href='/'>Portfolio</a>
            <div className='menu'>
                <img className='nav-img' src={fish} alt='PIC OF A FISH' />
                <ul className='header-nav-items'>
                    <li>
                        <a className='about' href='#about'>About</a>
                    </li>
                    <li>
                        <a className='projects' href='#projects'>Projects</a>
                    </li>
                    <li>
                        <a className='experience' href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a className='contact' href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
