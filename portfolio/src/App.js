import React from 'react'
import './App.css'
import Header from './components/Header'
import Avatar from './pages/Avatar'
import AboutMe from './pages/AboutMe'


const App = () => {
  return (
    <div className='app-div'>
      <Header />
      <Avatar />
      <AboutMe />
    </div>
  )
}

export default App
