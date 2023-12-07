import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import fish from '../assets/fish.png'
import './Header.css'


const Header = () => {
    return (
       <Nav className='header-nav'>

            <div className='head-image'>
                <NavItem>
                    <NavLink to='/'>
                        <img className='fish-img' src={fish} />
                    </NavLink>
                </NavItem>
                <h2 className='header-name'>Graham Blundell</h2>
            </div>

                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='/projects'>
                        <h2>Projects</h2>
                    </NavLink>    
                </NavItem>

                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='/resume'>
                        <h2>Resume</h2>
                    </NavLink>
                </NavItem>

                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='about'>
                        <h2>Contact me</h2>
                    </NavLink>
                </NavItem>

       </Nav> 
    )
}

export default Header
