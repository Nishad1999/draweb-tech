import React from "react";
import "./About.css"; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Learn more about our mission and values.</p>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We are a passionate team dedicated to providing high-quality services and 
            products to our customers. Our goal is to create innovative solutions that 
            make a difference.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to deliver the best user experience through our cutting-edge 
            technology and commitment to excellence.
          </p>
        </div>

        <div className="about-image">
          <img src="https://source.unsplash.com/500x300/?team,work" alt="About Us" />
        </div>
      </div>
    </div>
  );
};

export default About;
