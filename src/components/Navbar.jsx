import React from "react";
import logo from "../assets/image/image 1.png";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";

const Navbar1 = () => {
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="" />
        <h5>Precious,</h5>
      </div>
      <nav className="nav">
        <ul>
          <li><a href ="/#home">Home</a></li>
          <li><a href ="/#portforlio">Portfolio</a></li>
          <li><a href ="/#aboutme">About Me</a></li>
          <li><a href ="/#testimonials">Testimonials</a></li>
        </ul>
      </nav>
      <div className="contact">
        <button className="btn">Contact Me</button>
      </div>
    </div>
  );
};

export default Navbar1;
