import React, { useState, useEffect, useRef } from 'react';
import './SectorsSection.scss';

const SectorsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
      observer.disconnect();
    };
  }, []);

  const sectors = [
    {
      id: 'oil-gas',
      title: 'Oil & Gas',
      icon: '⚡',
      color: '#f59e0b',
      tagline: 'Energy Infrastructure & Development',
      description: 'Comprehensive financing for upstream, downstream, and midstream operations across emerging and frontier markets.',
      services: [
        {
          name: 'Upstream & Downstream',
          detail: 'Exploration, extraction, and refining operations'
        },
        {
          name: 'Refinery Construction',
          detail: 'Large-scale refinery development and modernization'
        },
        {
          name: 'LNG Terminals & Pipelines',
          detail: 'Infrastructure for liquefied natural gas distribution'
        },
        {
          name: 'ESG-Compliant Projects',
          detail: 'Sustainable energy solutions with environmental focus'
        }
      ],
      dealSize: '$50M - $750M',
      avgDuration: '24-48 months',
      highlight: 'Recent $420M LNG Terminal Financing'
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      icon: '🏙️',
      color: '#3b82f6',
      tagline: 'Urban Development & Commercial Properties',
      description: 'Strategic capital for transformative real estate projects that redefine urban landscapes and create lasting value.',
      services: [
        {
          name: 'Ultra-High-End Residential',
          detail: 'Luxury residential complexes and gated communities'
        },
        {
          name: 'Urban Smart Cities',
          detail: 'Technology-integrated urban development projects'
        },
        {
          name: 'Mixed-Use Commercial',
          detail: 'Multi-purpose developments combining retail, office, and residential'
        },
        {
          name: 'Industrial Zones',
          detail: 'Private special economic zones and industrial parks'
        }
      ],
      dealSize: '$75M - $680M',
      avgDuration: '36-60 months',
      highlight: 'Recent $680M Smart City Development'
    },
    {
      id: 'agriculture',
      title: 'Agriculture',
      icon: '🌾',
      color: '#10b981',
      tagline: 'Food Security & Agricultural Innovation',
      description: 'Funding large-scale agricultural operations that address food security and drive economic growth in developing regions.',
      services: [
        {
          name: 'Large-Scale Export Farms',
          detail: 'Commercial farming operations for global markets'
        },
        {
          name: 'Food Security Infrastructure',
          detail: 'Storage, processing, and distribution facilities'
        },
        {
          name: 'AgTech Deployments',
          detail: 'Modern agricultural technology and automation'
        },
        {
          name: 'Cold Chain & Logistics',
          detail: 'Temperature-controlled supply chain infrastructure'
        }
      ],
      dealSize: '$25M - $200M',
      avgDuration: '18-36 months',
      highlight: 'Recent $115M Agro Export Facility'
    },
    {
      id: 'manufacturing',
      title: 'Manufacturing',
      icon: '⚙️',
      color: '#8b5cf6',
      tagline: 'Industrial Growth & Production',
      description: 'Capital deployment for manufacturing facilities and industrial operations that drive economic transformation.',
      services: [
        {
          name: 'Special Economic Zones',
          detail: 'Dedicated manufacturing hubs with tax incentives'
        },
        {
          name: 'Equipment Leasing & Factory Finance',
          detail: 'Machinery acquisition and facility development'
        },
        {
          name: 'Advanced Industrial Systems',
          detail: 'Modern production facilities with automation'
        },
        {
          name: 'Export-Oriented Manufacturing',
          detail: 'Production facilities targeting international markets'
        }
      ],
      dealSize: '$40M - $500M',
      avgDuration: '24-42 months',
      highlight: 'Active in 8 Industrial Park Developments'
    }
  ];

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  const activeSector = sectors[activeTab];

  return (
    <section className="sectors-section" id="sectors" ref={sectionRef}>
      <div className="sectors-container">
        {/* Header */}
        <div className={`sectors-header ${isVisible ? 'visible' : ''}`}>
          <span className="sectors-badge">Investment Sectors</span>
          <h2 className="sectors-title">
            Focused Capital.
            <span className="gradient-text"> Real-World Impact.</span>
          </h2>
          <p className="sectors-subtitle">
            Strategic financing across four cornerstone sectors driving economic 
            transformation in emerging and frontier markets.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className={`sectors-tabs ${isVisible ? 'visible' : ''}`}>
          {sectors.map((sector, index) => (
            <button
              key={sector.id}
              className={`tab-button ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabChange(index)}
              style={{
                '--sector-color': sector.color,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="tab-icon">{sector.icon}</span>
              <span className="tab-title">{sector.title}</span>
              <span className="tab-indicator"></span>
            </button>
          ))}
        </div>

        {/* Active Sector Content */}
        <div className="sectors-content">
          <div className="content-wrapper" key={activeSector.id}>
            {/* Main Info */}
            <div className="sector-main">
              <div className="sector-header">
                <div 
                  className="sector-icon-large"
                  style={{ '--sector-color': activeSector.color }}
                >
                  {activeSector.icon}
                </div>
                <div className="sector-info">
                  <h3 className="sector-title">{activeSector.title}</h3>
                  <p className="sector-tagline">{activeSector.tagline}</p>
                </div>
              </div>

              <p className="sector-description">{activeSector.description}</p>

              {/* Quick Stats */}
              <div className="sector-stats">
                <div className="stat-box">
                  <div className="stat-label">Typical Deal Size</div>
                  <div className="stat-value">{activeSector.dealSize}</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Average Duration</div>
                  <div className="stat-value">{activeSector.avgDuration}</div>
                </div>
              </div>

              {/* Highlight Badge */}
              <div className="sector-highlight">
                <span className="highlight-icon">✦</span>
                <span className="highlight-text">{activeSector.highlight}</span>
              </div>
            </div>

            {/* Services Grid */}
            <div className="sector-services">
              <h4 className="services-title">Financing Solutions</h4>
              <div className="services-grid">
                {activeSector.services.map((service, index) => (
                  <div 
                    key={index} 
                    className="service-card"
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      '--service-color': activeSector.color 
                    }}
                  >
                    <div className="service-header">
                      <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
                      <div className="service-dot"></div>
                    </div>
                    <h5 className="service-name">{service.name}</h5>
                    <p className="service-detail">{service.detail}</p>
                    <div className="service-accent"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sector Comparison Table */}
        <div className={`sectors-comparison ${isVisible ? 'visible' : ''}`}>
          <h3 className="comparison-title">Sector Overview</h3>
          <div className="comparison-table">
            <div className="table-header">
              <div className="table-cell">Sector</div>
              <div className="table-cell">Focus Areas</div>
              <div className="table-cell">Deal Range</div>
              <div className="table-cell">Timeline</div>
            </div>
            {sectors.map((sector, index) => (
              <div 
                key={sector.id} 
                className={`table-row ${activeTab === index ? 'active' : ''}`}
                onClick={() => handleTabChange(index)}
              >
                <div className="table-cell">
                  <span className="cell-icon">{sector.icon}</span>
                  <span className="cell-text">{sector.title}</span>
                </div>
                <div className="table-cell">
                  <span className="cell-text">{sector.services.length} Solutions</span>
                </div>
                <div className="table-cell">
                  <span className="cell-text">{sector.dealSize}</span>
                </div>
                <div className="table-cell">
                  <span className="cell-text">{sector.avgDuration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={`sectors-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Discuss Your Project?</h3>
            <p className="cta-description">
              Submit your project brief for comprehensive evaluation and capital structuring.
            </p>
            <button className="cta-button">
              <span className="btn-text">Submit Project Brief</span>
              <span className="btn-arrow">→</span>
              <span className="btn-shine"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="sectors-decoration">
        <div className="decoration-blob decoration-blob-1"></div>
        <div className="decoration-blob decoration-blob-2"></div>
      </div>
    </section>
  );
};

export default SectorsSection;