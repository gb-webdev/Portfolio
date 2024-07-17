import React from 'react'
import linkedin from '../assets/linkedin.png'
import gitHub from '../assets/github.png'
import emailImg from '../assets/email-img.png'
import './Links.css'


const Links = () => {
    return (
        <section className='link-container' id='/'>
            <div className='links-imgs'>
                <a href='https://www.linkedin.com/in/graham-blundell/' target='blank'>
                    <img className='link-img1' src={linkedin} />
                </a>
                <a href='https://github.com/gb-webdev' target='blank'>
                    <img className='link-img2' src={gitHub} />
                </a>
                <a href='mailto:blundell.gp@gmail.com' target='blank'>
                    <img className='link-img3' src={emailImg} />
                </a>
            </div>
        </section>
    )
}

export default Links