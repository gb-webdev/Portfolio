import React, { useState } from 'react'
import menu from '../assets/menu.png'
import menuO from '../assets/menu-open.png'
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className='header-nav'>
            <h1>&nbsp;</h1>
            <img
                className='menu-btn'
                src={menuOpen ? menuO : menu}
                alt='Menu button'
                onClick={() => setMenuOpen(!menuOpen)}
            />
            <div className={`menu ${menuOpen && 'menuOpen'}`}>
                <ul className='header-nav-items' onClick={() => setMenuOpen(false)}>
                    <li>
                        <a className='experience' href='#experience'>Experience</a>
                    </li>
                    <li>
                        <a className='about' href='#toolkit'>Toolkit</a>
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