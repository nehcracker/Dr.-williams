import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.scss';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    deals: 0,
    volume: 0,
    countries: 0
  });

  useEffect(() => {
    setIsVisible(true);
    
    // Animate counters
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    
    const targets = {
      deals: 62,
      volume: 12.4,
      countries: 17
    };
    
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        deals: Math.floor(targets.deals * progress),
        volume: (targets.volume * progress).toFixed(1),
        countries: Math.floor(targets.countries * progress)
      });
      
      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-mesh-gradient"></div>
        <div className="hero-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          {/* Badge */}
          <div className={`hero-badge ${isVisible ? 'visible' : ''}`}>
            <span className="badge-icon">✦</span>
            <span className="badge-text">Private Financier | Strategic Capital Partner</span>
            <span className="badge-shine"></span>
          </div>

          {/* Main Headline */}
          <h1 className={`hero-title ${isVisible ? 'visible' : ''}`}>
            <span className="title-line">Dr Williams</span>
            <span className="title-line gradient-text">Financing Legacies.</span>
          </h1>

          {/* Subheadline */}
          <p className={`hero-subtitle ${isVisible ? 'visible' : ''}`}>
            Dr. Williams is the preferred private financier behind transformative ventures 
            across Europe, Africa, and Asia — spanning energy, infrastructure, real estate, 
            agriculture, and industrial growth.
          </p>

          {/* Statistics Bar */}
          <div className={`hero-stats ${isVisible ? 'visible' : ''}`}>
            <div className="stat-item">
              <div className="stat-number">{counters.deals}+</div>
              <div className="stat-label">Major Transactions</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">${counters.volume}B+</div>
              <div className="stat-label">Deal Volume</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">{counters.countries}</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`hero-cta ${isVisible ? 'visible' : ''}`}>
            <Link to="/submit-project" className="btn btn-primary btn-lg">
              <span className="btn-text">Submit Project Brief</span>
              <span className="btn-icon">→</span>
              <span className="btn-glow"></span>
            </Link>
            <Link to="/about" className="btn btn-outline btn-lg">
              <span className="btn-text">Learn More</span>
              <span className="btn-icon">↓</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`hero-trust ${isVisible ? 'visible' : ''}`}>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">30+ Years Experience</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">Bank-Grade Compliance</span>
            </div>
            <div className="trust-item">
              <span className="trust-icon">✓</span>
              <span className="trust-text">Global Network</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll">
          <div className="scroll-indicator">
            <span className="scroll-text">Scroll to explore</span>
            <div className="scroll-arrow">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;