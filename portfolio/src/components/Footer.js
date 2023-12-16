import React from 'react'
import './Footer.css'
import AppSound from './AppSound'

const Footer = () => {
    return (
        <div className='footer-div'>
            <h3 className='footer-text'>Built by Graham Blundell in React</h3>
             <div>
                <AppSound />
            </div>
        </div>
    )
}

export default Footer