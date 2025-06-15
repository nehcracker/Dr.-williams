import React from 'react';
import './PhilosophySection.scss';

const PhilosophySection = () => {
  const pillars = [
    "Strategic Patience",
    "Measured Risk Profiling",
    "Localised Due Diligence",
    "Post-Funding Impact Monitoring",
    "Multi-layered Exit Strategies"
  ];

  return (
    <section className="philosophy-section" id="philosophy">
      <div className="container">
        <h2 className="section-title">A Philosophy Built on Integrity, Vision, and Precision.</h2>
        
        <div className="philosophy-content">
          <p className="philosophy-narrative">
            At the heart of Dr. Williams' approach lies a profound respect for due diligence, 
            cultural intelligence, and strategic patience. Each project is evaluated not just 
            by its ROI, but by its capacity to create long-term transformation.
          </p>
          
          <blockquote className="philosophy-quote">
            "We don't just deploy capital. We fund legacy."
            <span className="quote-attribution">– Dr. Williams</span>
          </blockquote>
          
          <div className="philosophy-pillars">
            <h3 className="pillars-title">Key Pillars:</h3>
            <ul className="pillars-list">
              {pillars.map((pillar, index) => (
                <li key={index} className="pillar-item">{pillar}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
