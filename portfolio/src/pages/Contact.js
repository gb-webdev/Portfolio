import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import linkedin from '../assets/linkedin.png'
import gitHub from '../assets/github.png'
import emailImg from '../assets/email-img.png'
import './Contact.css'

const Contact = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_49fw4pc', 'template_v3ykkjl', form.current, 'dKtLzJYFF9jUU-bGF')
          .then((result) => {
              console.log(result.text)
          }, (error) => {
              console.log(error.text)
          })
          e.target.reset()
          alert('Thanks, your email has been sent')
      }

    return(
        <section className='contact-container' id='contact'>
            <h2 className='contact-header'>Contact Me</h2>
            <div className='img-links'>
                <a href='https://www.linkedin.com/in/graham-blundell/' target='blank'>
                    <img className='contact-img' src={linkedin} />
                </a>
                <a href='https://github.com/gb-webdev' target='blank'>
                    <img className='contact-img' src={gitHub} />
                </a>
                <a href='mailto:blundell.gp@gmail.com' target='blank'>
                    <img className='contact-img' src={emailImg} />
                </a>
            </div>
            <div className='contact-content'>
                <form className='email-form' ref={form} onSubmit={sendEmail}>
                    <input className='input-form' type='text' placeholder='Full Name...' name='user_name' required />
                    <input className='input-form' type='email' placeholder='Email...' name='user_email' required />
                    <input className='input-form' type='text' placeholder='Subject...' Subject='Email' name='user_subject' required />
                    <textarea className='input-form-txt' name='message' cols='30' rows='10' placeholder='Message...'></textarea>
                    <button className='email-button' type='submit'>Send Email</button>
                </form>
            </div>
        </section>
    )
}

export default Contact