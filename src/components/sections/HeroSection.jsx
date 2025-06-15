import React from 'react';
import Button from '../ui/Button';
import './HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Empowering Visionaries. Financing Legacies.</h1>
        <p className="subheadline">
          Dr. Williams is the preferred private financier behind transformative ventures 
          across Europe, Africa, and Asia — spanning energy, infrastructure, real estate, 
          agriculture, and industrial growth.
        </p>
        <div className="cta-buttons">
          <Button 
            variant="primary" 
            text="Request Private Consultation" 
            onClick={() => window.location.href = '/contact'}
          />
          <Button 
            variant="secondary" 
            text="Submit Project Brief" 
            onClick={() => window.location.href = '/submit-project'}
          />
        </div>
      </div>
      <div className="hero-background">
        {/* Animated map or background video would go here */}
      </div>
    </section>
  );
};

export default HeroSection;
