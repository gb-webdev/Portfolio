import React from 'react'
import './Home.css'
import { NavItem } from 'reactstrap'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home-div'>
            <h1>Hi I'm Graham Blundell! Welcome to my Portfolio</h1>
            <h1>I'm a full stack web web developer in San Diego, California</h1>
            <NavItem><h1>Click <NavLink className='home-link' to='projects'>here</NavLink> to see my projects</h1></NavItem>
            <NavItem><h1>Click <NavLink className='home-link' to='resume'>here</NavLink> to view/download my resume</h1></NavItem>
            <NavItem><h1>Click <NavLink className='home-link' to='about'>here</NavLink> to contact me</h1></NavItem>
        </div>
    )
}

export default Home