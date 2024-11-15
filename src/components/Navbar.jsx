import React, { useState } from 'react';
import './Navbar.css';
import logo from "../assets/image/image 1.png";

const Navbar1 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`container ${isMobileMenuOpen ? 'expanded' : ''}`}>
      <div className="logo">
        <img src={logo} alt="" />
        <h5>Precious,</h5>
      </div>
      <div className="navbar-links">
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <li><a href ="/#home">Home</a></li>
          <li><a href ="/#portforlio">Portfolio</a></li>
          <li><a href ="/#aboutme">About Me</a></li>
          <li><a href ="/#testimonials">Testimonials</a></li>
        </ul>
      </div>
      <div className="contact">
        <a href="#contact">
        <button className="btn" >Contact Me</button>
        </a>
      </div>
      <button className="menus-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
    </nav>
  );
};

export default Navbar1;