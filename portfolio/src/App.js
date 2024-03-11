import React from 'react'
import './App.css'
import Header from './components/Header'
import Avatar from './pages/Avatar'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'


const App = () => {
  return (
    <div className='app-div'>
      <Header />
      <Avatar />
      <AboutMe />
      <Experience />
    </div>
  )
}

export default App
