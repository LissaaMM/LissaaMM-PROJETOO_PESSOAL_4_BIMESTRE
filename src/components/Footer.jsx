import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Meu Portfólio</p>
      <p>
        <a href="#home">Home</a> | 
        <a href="#about">About</a> | 
        <a href="#projects">Projects</a> | 
        <a href="#contact">Contact</a>
      </p>
    </footer>
  );
}

export default Footer;
