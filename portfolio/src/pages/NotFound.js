import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'
import './NotFound.css'
import transition from '../pages/transition'

const NotFound = () => {
    return ( 
        <div className='found-div'>
            <NavItem><h2 className='not-found-text'>404 page not found. Would you like to&nbsp;<NavLink className='not-found-link' to='/'>go home</NavLink>?</h2></NavItem>
        </div>
    )
}

export default transition(NotFound)