import React from 'react'
import transition from '../pages/transition'
import './Resume.css'
import QR from '../assets/resume-QRCode.png'

const Resume = () => {
    return (
        <div className='resume-div'>
            <h1>Expand my resume to read,use the QR Code or download</h1>
            <img className='qr-code' src={QR} />
            <a href='https://coral-rubie-47.tiiny.site/' download='https://coral-rubie-47.tiiny.site/' target='blank'>
                <button className='resume-download'  >Download</button>
            </a>
        </div>
    )
}

export default transition(Resume)