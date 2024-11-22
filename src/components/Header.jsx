import React, { useState } from 'react';
import './Header.css';

const Header = ({ setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <button className="hamburger" onClick={toggleMenu}>
          &#9776;
        </button>
        <img src='./icon.png'></img>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li><button onClick={() => { setActiveSection('home'); setIsOpen(false); }}>Home</button></li>
          <li><button onClick={() => { setActiveSection('about'); setIsOpen(false); }}>About</button></li>
          <li><button onClick={() => { setActiveSection('projects'); setIsOpen(false); }}>Projects</button></li>
          <li><button onClick={() => { setActiveSection('contact'); setIsOpen(false); }}>Contact</button></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
