import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import AboutMe from './pages/AboutMe'
import NotFound from './pages/NotFound'
import './App.css'


const App = () => {

  const location = useLocation()

  return (
    <div className="App">
      <Header />
      <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
