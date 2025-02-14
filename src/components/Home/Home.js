import React from "react";
import "./Home.css"; // Import CSS file
   
const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Empowering Businesses with Innovation</h1>
          <p>We provide top-notch solutions in Design, Development, Implementation, and Marketing.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header> 

      {/* About Section */}
      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <p>
          We are a dedicated team of experts providing tailored solutions to businesses worldwide.
          Our innovative approach ensures success in every project we undertake.
        </p>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Let's Work Together</h2>
        <p>Ready to take your business to the next level? Get in touch with us today.</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
