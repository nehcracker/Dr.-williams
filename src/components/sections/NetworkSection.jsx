import React from 'react';
import './NetworkSection.scss';

const NetworkSection = () => {
  const networkStats = [
    { number: "18", label: "Country Desk Advisors" },
    { number: "Global", label: "Due Diligence Network" },
    { number: "40+", label: "Institutional Funding Desks" }
  ];
  
  const complianceBadges = [
    "Norton-Secured Data Exchange",
    "Compliant with OECD Anti-Corruption Guidelines",
    "GDPR-Compliant, AML/KYC Protocols in Place"
  ];

  return (
    <section className="network-section" id="network">
      <div className="container">
        <h2 className="section-title">Trusted by Institutions. Valued by Visionaries.</h2>
        
        <p className="network-narrative">
          Through strategic alliances with international law firms, consulting consortiums, 
          private bankers, and sovereign desks, Dr. Williams ensures every transaction is 
          airtight, compliant, and confidential.
        </p>
        
        <div className="network-stats">
          {networkStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="network-feature">
          <h3 className="feature-title">Exclusive Collaborations</h3>
          <p className="feature-text">
            with Private Banking Arms in Switzerland, Singapore, and London
          </p>
        </div>
        
        <div className="compliance-badges">
          {complianceBadges.map((badge, index) => (
            <div key={index} className="badge-item">
              <span className="badge-icon">✓</span>
              <span className="badge-text">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NetworkSection;
