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
                        <h4>Projects</h4>
                    </NavLink>    
                </NavItem>

                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='/resume'>
                        <h4>Resume</h4>
                    </NavLink>
                </NavItem>

                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='about'>
                        <h4>Contact me</h4>
                    </NavLink>
                </NavItem>

       </Nav> 
    )
}

export default Header
