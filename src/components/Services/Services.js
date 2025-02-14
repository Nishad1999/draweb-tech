import React from "react";
import "./Services.css"; // Import CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <p className="services-subheading">
        We provide top-tier solutions for businesses in Design, Development, Deployment, Marketing, and Service Support.
      </p>

      <div className="services-grid">
        {/* Design */}
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?design,creative" alt="Design" />
          <h3>Design</h3>
          <p>We craft visually stunning and user-friendly UI/UX designs to enhance customer experiences.</p>
        </div>

        {/* Development */}
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?technology,programming" alt="Development" />
          <h3>Development</h3>
          <p>Our expert developers create high-performance web and mobile applications tailored to your needs.</p>
        </div>

        {/* Deployment */}
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?server,cloud" alt="Deployment" />
          <h3>Deployment</h3>
          <p>We handle seamless integration, cloud deployment, and server management for your business.</p>
        </div>

        {/* Marketing */}
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?marketing,advertising" alt="Marketing" />
          <h3>Marketing</h3>
          <p>Our digital marketing strategies help businesses grow, drive engagement, and increase conversions.</p>
        </div>

        {/* Service Support */}
        <div className="service-card">
          <img src="https://source.unsplash.com/300x200/?customer,support" alt="Service Support" />
          <h3>Service Support</h3>
          <p>We provide 24/7 technical support and maintenance to keep your business running smoothly.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
