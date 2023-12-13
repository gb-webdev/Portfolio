import React from 'react'
import transition from '../pages/transition'
import './Resume.css'
import QR from '../assets/resume-QRCode.png'

const Resume = () => {
    return (
        <div className='resume-div-wrap'>
            <div className='resume-text'>
                <h2>View my resume with the QR Code. Or view/download with the download button</h2>
            </div>
            <div className='resume-actions'>
                <img className='qr-code' src={QR} />
                <a href='https://coral-rubie-47.tiiny.site/' download='https://coral-rubie-47.tiiny.site/' target='blank'>
                    <button className='resume-download'>Download</button>
                </a>
            </div>
        </div>
    )
}

export default transition(Resume)