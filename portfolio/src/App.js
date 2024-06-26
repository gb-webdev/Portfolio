import React from 'react'
import './App.css'
import Header from './components/Header'
import Links from './components/Links'
import Avatar from './pages/Avatar'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className='app-div'>
      <Header />
      <Links />
      <Avatar />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
