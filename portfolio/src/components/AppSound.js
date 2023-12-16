import React, { useRef, useState, useEffect } from 'react'
import song from '../assets/song-edit.mp3'
import './AppSound.css'
import soundImg from '../assets/sound.png'

const AppSound = () => {
  const audioRef = useRef()
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const playPromise = audioRef.current.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
        })
        .catch((error) => {
          console.error('Autoplay prevented:', error)
        });
    }
  }, []);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  };

  return (
    <div sound-wrap>
      <button className='sound-button' onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
        <img className='sound-image' src={soundImg}/>
      </button>
      <audio ref={audioRef} volume={0.5} loop>
        <source src={song} type="audio/mp3" />
        <source src={song} type="audio/wav" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  )
}

export default AppSound