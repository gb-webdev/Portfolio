import React from 'react'
import './Home.css'
import { NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import transition from '../pages/transition'

const Home = () => {
    return (
        <div className='home-div-wrap'>
            <div className='home-div'>
                <h1>Hi, I'm Graham! Welcome to my Portfolio</h1>
                <h1>I'm a full stack web web developer in San Diego, CA</h1>
                <NavItem><h1>See my projects <NavLink className='home-link' to='projects'>here</NavLink></h1></NavItem>
                <NavItem><h1>View/download my resume <NavLink className='home-link' to='resume'>here</NavLink></h1></NavItem>
                <NavItem><h1>Contact me <NavLink className='home-link' to='about'>here</NavLink></h1></NavItem>
            </div>
        </div>
    )
}

export default transition(Home)