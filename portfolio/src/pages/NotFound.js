import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavItem } from 'reactstrap'
import './NotFound.css'

const NotFound = () => {
    return ( 
        <div className='found-div'>
            <NavItem><h1>404 page not found. Would you like to <NavLink to='/'> go home</NavLink>?</h1></NavItem>
        </div>
    )
}

export default NotFound