import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import fish from '../assets/fish.png'
import './Header.css'


const Header = () => {
    return (
       <Nav className='header-nav'>

        <div>
            <NavItem>
                <NavLink to='/'>
                    <img className='fish-img' src={fish} />
                </NavLink>
            </NavItem>
        </div>

        <div>
                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='/projects'>
                        <h2>Projects</h2>
                    </NavLink>    
                </NavItem>
        </div>

        <div>
                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='/resume'>
                        <h2>Resume</h2>
                    </NavLink>
                </NavItem>
        </div>
            
        <div>
                <NavItem className='head-link'>
                    <NavLink className='head-nav-link' to='about'>
                        <h2>About me</h2>
                    </NavLink>
                </NavItem>
        </div>

       </Nav> 
    )
}

export default Header