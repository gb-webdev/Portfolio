import React, { useState } from 'react'
import menu from '../assets/menu.png'
import menuO from '../assets/menu-open.png'
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
                            ? menuO
                            : menu
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
                        <a className='experience' href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a className='projects' href='#projects'>Projects</a>
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
