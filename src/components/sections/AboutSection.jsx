import React from 'react';
import './AboutSection.scss';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <h2 className="section-title">A Legacy of Banking. A Future of Private Finance.</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="core-narrative">
              Dr. Williams, a former executive in the European banking sector, transitioned into 
              private finance to bridge the capital divide in frontier and emerging markets. His 
              sharp insight into risk, regulatory frameworks, and sovereign finance has enabled 
              the funding of large-scale developments that redefine economies.
            </p>
            <p>
              With over 30 years of experience, Dr. Williams commands a discreet but expansive 
              network of private banks, institutional investors, and sovereign wealth desks. 
              His capital deployment strategy is deeply analytical, impact-driven, and 
              relationship-focused.
            </p>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">$12B+</div>
              <div className="stat-label">in Deal Volume Financed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">3</div>
              <div className="stat-label">Continents</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">18</div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">60+</div>
              <div className="stat-label">Institutional Partners</div>
            </div>
            <div className="credentials">
              <div className="credential-item">Founding Member, Global Capital Advisory Circle (GCAC)</div>
              <div className="credential-item">Alumni – London School of Economics (LSE), Executive Finance, 1995</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
