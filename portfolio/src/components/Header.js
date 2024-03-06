import React, { useState } from 'react'
import fish from '../assets/fish.png'
import git from '../assets/11-git.png'
import './Header.css'


const Header = () => {

    const [menuOpen, setmenuOpen] = useState(false)

    return (
        <nav className='header-nav'>
            <a className='header-title' href='/'>Portfolio</a>
            <div className='menu'>
                <img
                    className='menu-btn'
                    src={
                        menuOpen
                            ? git
                            : fish
                        }
                    alt='Menu button' 
                    onClick={() => setmenuOpen(!menuOpen)}
                />
                <ul className={`header-nav-items ${menuOpen && 'menuOpen'}`}
                onClick={() => setmenuOpen(false)}
                >
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
