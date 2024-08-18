import { useState } from 'react'
import './App.css'
import './top-bar.css'
import './globals.css'
import OrbitingCircles from './OrbitingCircles';

function App() {
  const navbar = (
    <>
      <div className="logo"><a href='index.html' className="top-bar-link"> My Logo </a></div>
          <nav className="nav-links">
              <a href="#home" className="top-bar-link">Home</a>
              <a href="#about" className="top-bar-link">About</a>
              <a href="#contact" className="top-bar-link">Contact</a>
          </nav>
    </>
  );
  return (
    <>
      <div className="top-bar">
        {navbar}
      </div>
      <div className="h-full w-full">
        <OrbitingCircles />
      </div>
    </>
  )
}

export default App
