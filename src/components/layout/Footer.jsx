import React from 'react';
import './Footer.scss'; // Import the SCSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Floating particles background effect */}
      <div className="footer-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="footer-content">
        {/* Brand Section */}
        <div className="footer-brand">
          <h3>Empowering Visionaries & Financing Legacies.</h3>
        </div>

        {/* Tagline */}
        <p className="footer-tagline">
          Dr. Williams is the preferred private financier behind transformative ventures across Europe, Africa, and Asia
        </p>

        {/* Navigation Links */}
        <nav className="footer-links">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About</a>
          <a href="#services" className="footer-link">Services</a>
          <a href="#portfolio" className="footer-link">Portfolio</a>
          <a href="#blog" className="footer-link">Blog</a>
          <a href="#privacy" className="footer-link">Privacy</a>
        </nav>

        {/* Decorative Divider */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>
            Made with <span className="footer-heart">♥</span> © 2025 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;