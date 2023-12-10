import React from 'react'
import './Home.css'
import { NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import transition from '../pages/transition'

const Home = () => {
    return (
        <div className='home-div-wrap'>
            <div className='home-div'>
                <h2>Hi, I'm Graham! Welcome to my Portfolio</h2>
                <h2>I'm a full stack web web developer in San Diego, CA</h2>
                <NavItem><h2>See my projects <NavLink className='home-link' to='projects'>here</NavLink></h2></NavItem>
                <NavItem><h2>View/download my resume <NavLink className='home-link' to='resume'>here</NavLink></h2></NavItem>
                <NavItem><h2>Contact me <NavLink className='home-link' to='about'>here</NavLink></h2></NavItem>
            </div>
        </div>
    )
}

export default transition(Home)