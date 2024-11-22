import React, { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
      default:
        return <Home />
    }
  }

  return (
    <div className="container">
      <Header setActiveSection={setActiveSection} />
      {renderSection()}
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
