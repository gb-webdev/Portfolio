import React, { useState, useEffect } from 'react'
import menu from '../assets/menu.png'
import menuO from '../assets/menu-open.png'
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [scrollDirection, setScrollDirection] = useState('up')
    const [showHamburger, setShowHamburger] = useState(false)

    useEffect(() => {
        let lastScrollY = window.scrollY

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrollDirection('down')
                setShowHamburger(false)
            } else {
                setScrollDirection('up')
                setShowHamburger(true)
            }
            lastScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <nav className={`header-nav ${scrollDirection === 'down' ? 'hidden' : ''}`}>
            <h1 className='header-title'>&nbsp;</h1>
            <div className={`menu-btn-container ${showHamburger ? 'show' : 'hide'}`}>
                <img
                    className='menu-btn'
                    src={menuOpen ? menuO : menu}
                    alt='Menu button'
                    onClick={() => setMenuOpen(!menuOpen)}
                />
            </div>
            <div className={`menu ${menuOpen && 'menuOpen'}`}>
                <ul className='header-nav-items' onClick={() => setMenuOpen(false)}>
                    <li>
                        <a className='avatar' href='#/'>↑↑↑</a>
                    </li>
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
    );
}

export default Header
