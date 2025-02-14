import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/drawebtechLogo.png"; // Import your logo
import "./Navbar.css"; // Import CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo - Positioned Left */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Centered Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      {/* Sign Up Button - Positioned Right */}
      <button className="nav-button">Sign Up</button>
    </nav>
  );
};

export default Navbar;
