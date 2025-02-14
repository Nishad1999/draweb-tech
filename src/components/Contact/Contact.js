import React from "react";
import "./Contact.css"; // Import CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Contact Header */}
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Reach out to us for any inquiries or collaborations.</p>
      </div>

      {/* Contact Details Section */}
      <div className="contact-details">
        <div className="contact-info">
          <h3>Our Address</h3>
          <p>Deira City Centre</p>
        </div>
        <div className="contact-info">
          <h3>Email</h3>
          <p>contact@webtech.com</p>
        </div>
        <div className="contact-info">
          <h3>Phone</h3>
          <p>+9715532823790</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="contact-form-container">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Google Maps Embed */}
      <div className="contact-map">
        <h2>Find Us</h2>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.1234567890123!2d55.1234567890123!3d25.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c1234567890%3A0x1234567890abcdef!2sBusiness%20Village%2C%20Deira%2C%20Dubai!5e0!3m2!1sen!2sae!4v1615867033717!5m2!1sen!2sae"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
