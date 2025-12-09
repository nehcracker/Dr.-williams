import React, { useState, useEffect, useRef } from 'react';
import './PhilosophySection.scss';

const PhilosophySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activePillar, setActivePillar] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setLoading(false);
        }
      },
      { threshold: 0.2 }
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

  const pillars = [
    {
      id: 'strategic-patience',
      icon: '⏳',
      title: 'Strategic Patience',
      subtitle: 'Long-term capital deployment',
      description: 'We believe in partnerships that span decades, not quarters. Our capital works on your timeline, not market pressures.',
      color: '#a855f7',
      benefits: [
        'Multi-decade investment horizons',
        'Flexible milestone frameworks',
        'No rushed exit pressures'
      ]
    },
    {
      id: 'measured-risk',
      icon: '🛡️',
      title: 'Measured Risk Frameworks',
      subtitle: 'Collateral-backed security',
      description: 'Every investment is structured with comprehensive risk assessment and asset-backed security measures.',
      color: '#3b82f6',
      benefits: [
        'Advanced risk modeling',
        'Asset-backed structures',
        'Multiple security layers'
      ]
    },
    {
      id: 'due-diligence',
      icon: '🔍',
      title: 'Localized Due Diligence',
      subtitle: 'Cross-jurisdictional validation',
      description: 'Our teams conduct on-site assessments across all jurisdictions, ensuring complete transparency and compliance.',
      color: '#10b981',
      benefits: [
        'On-ground verification teams',
        'Multi-jurisdictional compliance',
        'Cultural intelligence integration'
      ]
    },
    {
      id: 'impact-monitoring',
      icon: '📊',
      title: 'Post-Funding Impact',
      subtitle: 'Performance covenants',
      description: 'Clear, measurable milestones with regular reporting and performance tracking throughout the investment lifecycle.',
      color: '#f59e0b',
      benefits: [
        'Quarterly impact assessments',
        'Real-time reporting dashboards',
        'Milestone-based releases'
      ]
    },
    {
      id: 'exit-strategies',
      icon: '🎯',
      title: 'Multi-Layered Exits',
      subtitle: 'Transparent milestones',
      description: 'Multiple pre-defined exit pathways ensure flexibility and alignment with evolving market conditions.',
      color: '#ef4444',
      benefits: [
        'Pre-structured exit options',
        'Market-adaptive strategies',
        'Partner-first approach'
      ]
    },
    
    {
      id: 'legacy-building',
      icon: '🏛️',
      title: 'Legacy Building',
      subtitle: 'Generational value creation',
      description: 'Every investment is designed to create lasting value that transcends market cycles.',
      color: '#8b5cf6',
      benefits: [
        'Multi-generational impact',
        'Cultural preservation',
        'Sustainable development'
      ]
    }
  ];

  const coreValues = [
    {
      icon: '🏛️',
      title: 'Legacy Building',
      description: 'Every investment creates lasting value for generations'
    },
    {
      icon: '🤝',
      title: 'Partnership First',
      description: 'Capital relationships built on mutual trust'
    },
    {
      icon: '🌍',
      title: 'Global Perspective',
      description: 'Local expertise with international standards'
    },
    {
      icon: '⚖️',
      title: 'Institutional Discipline',
      description: 'Bank-grade processes with private flexibility'
    }
  ];

  return (
    <section className="philosophy-section" id="philosophy" ref={sectionRef}>
      {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Loading Philosophy...</p>
        </div>
      )}
      <div className="philosophy-container">
        {/* Header */}
        <div className={`philosophy-header ${isVisible ? 'visible' : ''}`}>
          <span className="philosophy-badge">Investment Philosophy</span>
          <h2 className="philosophy-title">
            A Philosophy Built on
            <span className="gradient-text"> Integrity, Vision, and Precision.</span>
          </h2>
          <p className="philosophy-subtitle">
            At the heart of Dr. Williams' approach lies a profound respect for 
            due diligence, cultural intelligence, and strategic patience. Each 
            project is evaluated not just by its ROI, but by its capacity to 
            create long-term transformation.
          </p>
        </div>

        {/* Five Pillars */}
        <div className={`pillars-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="pillars-title">Five Key Pillars</h3>
          
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`pillar-card ${activePillar === pillar.id ? 'active' : ''}`}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
                style={{
                  '--pillar-color': pillar.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="pillar-header">
                  <div className="pillar-icon">{pillar.icon}</div>
                  <div className="pillar-number">{String(index + 1).padStart(2, '0')}</div>
                </div>
                
                <div className="pillar-content">
                  <h4 className="pillar-title">{pillar.title}</h4>
                  <p className="pillar-subtitle">{pillar.subtitle}</p>
                  <p className="pillar-description">{pillar.description}</p>
                  
                  <div className="pillar-benefits">
                    {pillar.benefits.map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <span className="benefit-bullet">•</span>
                        <span className="benefit-text">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pillar-accent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className={`values-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="values-title">Core Values</h3>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="value-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="value-icon">{value.icon}</div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className={`philosophy-quote-section ${isVisible ? 'visible' : ''}`}>
          <div className="quote-container">
            <div className="quote-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-circle"></div>
              <div className="decoration-line"></div>
            </div>
            
            <blockquote className="main-quote">
              <div className="quote-mark">"</div>
              <p className="quote-text">
                We don't just deploy capital. We fund legacy.
              </p>
              <div className="quote-attribution">
                <div className="attribution-dash"></div>
                <span className="attribution-name">Dr. Williams</span>
                <span className="attribution-title">Private Financier</span>
              </div>
            </blockquote>
            
            <div className="quote-visual">
              <div className="visual-circle">
                <div className="circle-inner">
                  <span className="circle-text">30+</span>
                  <span className="circle-label">Years</span>
                </div>
              </div>
              <div className="visual-lines">
                <div className="line line-1"></div>
                <div className="line line-2"></div>
                <div className="line line-3"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Approach Timeline */}
        <div className={`approach-section ${isVisible ? 'visible' : ''}`}>
          <h3 className="approach-title">Our Investment Approach</h3>
          
          <div className="approach-timeline">
            <div className="timeline-item">
              <div className="timeline-number">01</div>
              <div className="timeline-content">
                <h4 className="timeline-title">Initial Assessment</h4>
                <p className="timeline-description">
                  Comprehensive project evaluation including market analysis, 
                  risk profiling, and impact potential assessment.
                </p>
              </div>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-item">
              <div className="timeline-number">02</div>
              <div className="timeline-content">
                <h4 className="timeline-title">Due Diligence</h4>
                <p className="timeline-description">
                  On-ground verification, legal compliance review, and 
                  stakeholder interviews across all relevant jurisdictions.
                </p>
              </div>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-item">
              <div className="timeline-number">03</div>
              <div className="timeline-content">
                <h4 className="timeline-title">Structuring</h4>
                <p className="timeline-description">
                  Custom capital structure design with milestone-based funding, 
                  security frameworks, and exit pathways.
                </p>
              </div>
            </div>
            
            <div className="timeline-connector"></div>
            
            <div className="timeline-item">
              <div className="timeline-number">04</div>
              <div className="timeline-content">
                <h4 className="timeline-title">Active Partnership</h4>
                <p className="timeline-description">
                  Ongoing support, quarterly reviews, and strategic guidance 
                  throughout the investment lifecycle.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`philosophy-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stat-item">
            <div className="stat-icon">✓</div>
            <div className="stat-content">
              <div className="stat-number">100%</div>
              <div className="stat-label">Compliance Rate</div>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <div className="stat-number">62+</div>
              <div className="stat-label">Successful Deals</div>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon">🌍</div>
            <div className="stat-content">
              <div className="stat-number">17</div>
              <div className="stat-label">Countries</div>
            </div>
          </div>
          
          <div className="stat-divider"></div>
          
          <div className="stat-item">
            <div className="stat-icon">⭐</div>
            <div className="stat-content">
              <div className="stat-number">Zero</div>
              <div className="stat-label">Default Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="philosophy-background">
        <div className="bg-gradient-1"></div>
        <div className="bg-gradient-2"></div>
        <div className="bg-pattern"></div>
      </div>
    </section>
  );
};

export default PhilosophySection;