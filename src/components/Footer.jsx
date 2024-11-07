import React from "react";
import logo from "../assets/image/image 1.png";
import "./Footer.css";
import { HashLink as Link } from "react-router-hash-link";
import Vector4 from "../assets/image/Vector (4).png";
import Vector5 from "../assets/image/Vector (5).png";
import Vector6 from "../assets/image/Vector (6).png";
import Vector7 from "../assets/image/Vector (7).png";
import Divider from "../assets/image/Divider.png";

const Footer = () => {
  return (
    <div className="contain">
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
          <h5>Precious,</h5>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#portforlio">Portfolio</a>
            </li>
            <li>
              <a href="/#aboutme">About Me</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
            <li>
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/#portforlio">Portfolio</a>
            </li>
          </ul>
        </nav>
        <div className="contact">
          <img src={Vector4} alt="" className="facebook"/>
          <img src={Vector5} alt="" />
          <img src={Vector6} alt="" />
          <img src={Vector7} alt="" />
        </div>
      </div>
      <div className="container2">
        <img src={Divider} alt="" />
        <div className="credit">
            <p>Made with 💖 by Airdokan</p>
            <div className="credit1">
            <ul>
                <li>Privacy Policy </li>
                <li>Terms of Service</li>
                <li>Cookie Settings</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
