import React, { useState, useEffect, useRef } from 'react';
import './NetworkSection.scss';

const NetworkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState('europe');
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const regions = {
    europe: {
      name: 'Europe',
      icon: '🇪🇺',
      color: '#3b82f6',
      countries: ['Switzerland', 'United Kingdom', 'Germany', 'France', 'Netherlands', 'Luxembourg'],
      stats: {
        partners: '22',
        deals: '28',
        volume: '$4.8B'
      },
      partners: [
        { name: 'UBS', type: 'Private Banking', location: 'Zurich' },
        { name: 'Lombard Odier', type: 'Wealth Management', location: 'Geneva' },
        { name: 'HSBC Private Bank', type: 'Commercial Banking', location: 'London' },
        { name: 'Deutsche Bank', type: 'Investment Banking', location: 'Frankfurt' }
      ],
      description: 'Strategic partnerships across major European financial centers, with deep institutional relationships in Zurich, London, and Frankfurt.'
    },
    africa: {
      name: 'Africa',
      icon: '🌍',
      color: '#10b981',
      countries: ['Nigeria', 'Kenya', 'South Africa', 'Ghana', 'Tanzania', 'Morocco', 'Egypt'],
      stats: {
        partners: '18',
        deals: '24',
        volume: '$5.2B'
      },
      partners: [
        { name: 'Standard Chartered', type: 'Commercial Banking', location: 'Nairobi' },
        { name: 'Absa Group', type: 'Investment Banking', location: 'Johannesburg' },
        { name: 'Ecobank', type: 'Regional Banking', location: 'Lagos' },
        { name: 'IFC Africa', type: 'Development Finance', location: 'Accra' }
      ],
      description: 'Extensive network across key African markets with focus on infrastructure and natural resource financing.'
    },
    asia: {
      name: 'Asia & Middle East',
      icon: '🌏',
      color: '#f59e0b',
      countries: ['Singapore', 'UAE', 'India', 'Hong Kong', 'Qatar', 'Malaysia', 'Vietnam'],
      stats: {
        partners: '20',
        deals: '18',
        volume: '$3.8B'
      },
      partners: [
        { name: 'DBS Bank', type: 'Commercial Banking', location: 'Singapore' },
        { name: 'Emirates NBD', type: 'Regional Banking', location: 'Dubai' },
        { name: 'ICICI Bank', type: 'Corporate Banking', location: 'Mumbai' },
        { name: 'Standard Chartered Asia', type: 'Trade Finance', location: 'Hong Kong' }
      ],
      description: 'Strategic positioning across Asian financial hubs with emphasis on trade finance and cross-border transactions.'
    }
  };

  const globalStats = [
    { icon: '🤝', number: '60+', label: 'Institutional Partners' },
    { icon: '🌍', number: '17', label: 'Active Countries' },
    { icon: '🏛️', number: '42', label: 'Private Banks' },
    { icon: '📊', number: '14', label: 'Investment Desks' },
    { icon: '⚖️', number: '8', label: 'Sovereign Vehicles' }
  ];

  const complianceBadges = [
    { icon: '🛡️', title: 'FATF AML/KYC', description: 'Financial Action Task Force Compliant' },
    { icon: '🔒', title: 'GDPR Compliant', description: 'EU Data Protection Standards' },
    { icon: '🌐', title: 'OECD Standards', description: 'Anti-corruption Guidelines' },
    { icon: '✓', title: 'ISO Certified', description: 'International Quality Standards' }
  ];

  const selectedRegion = regions[activeRegion];

  return (
    <section className="network-section" id="network" ref={sectionRef}>
      <div className="network-container">
        {/* Header */}
        <div className={`network-header ${isVisible ? 'visible' : ''}`}>
          <span className="network-badge">Global Network</span>
          <h2 className="network-title">
            Trusted by Institutions.
            <span className="gradient-text"> Valued by Visionaries.</span>
          </h2>
          <p className="network-subtitle">
            Through strategic alliances with international law firms, consulting 
            consortiums, private bankers, and sovereign desks, Dr. Williams ensures 
            every transaction is airtight, compliant, and confidential.
          </p>
        </div>

        {/* Global Stats */}
        <div className={`global-stats ${isVisible ? 'visible' : ''}`}>
          {globalStats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* World Map Visualization */}
        <div className={`world-map ${isVisible ? 'visible' : ''}`}>
          <div className="map-container">
            <div className="map-background">
              <div className="continent continent-europe"></div>
              <div className="continent continent-africa"></div>
              <div className="continent continent-asia"></div>
            </div>

            {/* Connection Lines */}
            <svg className="connection-lines" viewBox="0 0 800 400">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              <path 
                className="connection-line" 
                d="M 250 150 Q 280 200, 300 250" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
              
              <path 
                className="connection-line" 
                d="M 300 150 Q 450 120, 600 180" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
              
              <path 
                className="connection-line" 
                d="M 350 280 Q 450 250, 580 220" 
                stroke="url(#lineGradient)" 
                strokeWidth="2" 
                fill="none"
                opacity="0.6"
              />
            </svg>

            {/* Region Markers */}
            <div 
              className={`region-marker europe ${activeRegion === 'europe' ? 'active' : ''}`}
              onClick={() => setActiveRegion('europe')}
            >
              <div className="marker-dot"></div>
              <div className="marker-pulse"></div>
              <div className="marker-label">Europe</div>
            </div>

            <div 
              className={`region-marker africa ${activeRegion === 'africa' ? 'active' : ''}`}
              onClick={() => setActiveRegion('africa')}
            >
              <div className="marker-dot"></div>
              <div className="marker-pulse"></div>
              <div className="marker-label">Africa</div>
            </div>

            <div 
              className={`region-marker asia ${activeRegion === 'asia' ? 'active' : ''}`}
              onClick={() => setActiveRegion('asia')}
            >
              <div className="marker-dot"></div>
              <div className="marker-pulse"></div>
              <div className="marker-label">Asia</div>
            </div>
          </div>
        </div>

        {/* Region Details */}
        <div className={`region-details ${isVisible ? 'visible' : ''}`}>
          <div className="region-info" key={activeRegion}>
            <div className="region-header">
              <div className="region-icon" style={{ '--region-color': selectedRegion.color }}>
                {selectedRegion.icon}
              </div>
              <div className="region-header-content">
                <h3 className="region-name">{selectedRegion.name}</h3>
                <p className="region-description">{selectedRegion.description}</p>
              </div>
            </div>

            {/* Region Stats */}
            <div className="region-stats">
              <div className="region-stat-item">
                <div className="region-stat-number">{selectedRegion.stats.partners}</div>
                <div className="region-stat-label">Partners</div>
              </div>
              <div className="region-stat-item">
                <div className="region-stat-number">{selectedRegion.stats.deals}</div>
                <div className="region-stat-label">Transactions</div>
              </div>
              <div className="region-stat-item">
                <div className="region-stat-number">{selectedRegion.stats.volume}</div>
                <div className="region-stat-label">Deal Volume</div>
              </div>
            </div>

            {/* Countries */}
            <div className="region-countries">
              <div className="countries-label">Active Countries:</div>
              <div className="countries-list">
                {selectedRegion.countries.map((country, idx) => (
                  <span key={idx} className="country-tag">{country}</span>
                ))}
              </div>
            </div>

            {/* Partners */}
            <div className="region-partners">
              <h4 className="partners-title">Key Institutional Partners</h4>
              <div className="partners-grid">
                {selectedRegion.partners.map((partner, idx) => (
                  <div key={idx} className="partner-card">
                    <div className="partner-name">{partner.name}</div>
                    <div className="partner-type">{partner.type}</div>
                    <div className="partner-location">📍 {partner.location}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Compliance Section */}
        <div className={`compliance-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="compliance-title">Trust & Compliance</h3>
          <p className="compliance-subtitle">
            Bank-grade security and regulatory compliance across all jurisdictions
          </p>
          
          <div className="compliance-grid">
            {complianceBadges.map((badge, index) => (
              <div 
                key={index} 
                className="compliance-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="compliance-icon">{badge.icon}</div>
                <div className="compliance-content">
                  <div className="compliance-name">{badge.title}</div>
                  <div className="compliance-desc">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`network-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Join Our Global Network</h3>
            <p className="cta-description">
              Partner with a trusted network of institutional investors, private banks, 
              and sovereign wealth funds across three continents.
            </p>
            <button className="cta-button">
              <span className="btn-text">Submit Project Brief</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Background */}
      <div className="network-background">
        <div className="bg-gradient bg-gradient-1"></div>
        <div className="bg-gradient bg-gradient-2"></div>
        <div className="bg-grid"></div>
      </div>
    </section>
  );
};

export default NetworkSection;