import React, { useState, useEffect, useRef } from 'react';
import './PhilosophySection.scss';

const PhilosophySection = () => {
  const [activePillar, setActivePillar] = useState(null);
  const [visibleSections, setVisibleSections] = useState({
    header: true,
    pillars: true,
    values: true,
    quote: true,
    approach: true,
    stats: true
  });
  
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const pillarsRef = useRef(null);
  const valuesRef = useRef(null);
  const quoteRef = useRef(null);
  const approachRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const refName = entry.target.dataset.section;
          setVisibleSections(prev => ({ ...prev, [refName]: true }));
        }
      });
    }, observerOptions);

    const refs = [
      { ref: headerRef, name: 'header' },
      { ref: pillarsRef, name: 'pillars' },
      { ref: valuesRef, name: 'values' },
      { ref: quoteRef, name: 'quote' },
      { ref: approachRef, name: 'approach' },
      { ref: statsRef, name: 'stats' }
    ];

    refs.forEach(({ ref, name }) => {
      if (ref.current) {
        ref.current.dataset.section = name;
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
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
      ],
      direction: 'left'
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
      ],
      direction: 'up'
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
      ],
      direction: 'right'
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
      ],
      direction: 'left'
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
      ],
      direction: 'down'
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
      ],
      direction: 'right'
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

  const timelineSteps = [
    {
      number: '01',
      title: 'Initial Assessment',
      description: 'Comprehensive project evaluation including market analysis, risk profiling, and impact potential assessment.',
      direction: 'left'
    },
    {
      number: '02',
      title: 'Due Diligence',
      description: 'On-ground verification, legal compliance review, and stakeholder interviews across all relevant jurisdictions.',
      direction: 'right'
    },
    {
      number: '03',
      title: 'Structuring',
      description: 'Custom capital structure design with milestone-based funding, security frameworks, and exit pathways.',
      direction: 'left'
    },
    {
      number: '04',
      title: 'Active Partnership',
      description: 'Ongoing support, quarterly reviews, and strategic guidance throughout the investment lifecycle.',
      direction: 'right'
    }
  ];

  const stats = [
    { icon: '✓', number: '100%', label: 'Compliance Rate' },
    { icon: '📈', number: '62+', label: 'Successful Deals' },
    { icon: '🌍', number: '17', label: 'Countries' },
    { icon: '⭐', number: 'Zero', label: 'Default Rate' }
  ];

  return (
    <section className="philosophy-section" id="philosophy" ref={sectionRef}>
      <div className="philosophy-container">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`philosophy-header ${visibleSections.header ? 'visible' : ''}`}
        >
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
        <div 
          ref={pillarsRef}
          className={`pillars-section ${visibleSections.pillars ? 'visible' : ''}`}
        >
          <h3 className="pillars-title">Six Key Pillars</h3>
          
          <div className="pillars-grid">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.id}
                className={`pillar-card slide-${pillar.direction} ${activePillar === pillar.id ? 'active' : ''}`}
                onMouseEnter={() => setActivePillar(pillar.id)}
                onMouseLeave={() => setActivePillar(null)}
                onClick={() => setActivePillar(activePillar === pillar.id ? null : pillar.id)}
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
        <div 
          ref={valuesRef}
          className={`values-section ${visibleSections.values ? 'visible' : ''}`}
        >
          <h3 className="values-title">Core Values</h3>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`value-card slide-${['left', 'up', 'down', 'right'][index % 4]}`}
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
        <div 
          ref={quoteRef}
          className={`philosophy-quote-section ${visibleSections.quote ? 'visible' : ''}`}
        >
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
        <div 
          ref={approachRef}
          className={`approach-section ${visibleSections.approach ? 'visible' : ''}`}
        >
          <h3 className="approach-title">Our Investment Approach</h3>
          
          <div className="approach-timeline">
            {timelineSteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className={`timeline-item slide-${step.direction}`}>
                  <div className="timeline-number">{step.number}</div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{step.title}</h4>
                    <p className="timeline-description">{step.description}</p>
                  </div>
                </div>
                {index < timelineSteps.length - 1 && (
                  <div className="timeline-connector"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Stats Bar */}
        <div 
          ref={statsRef}
          className={`philosophy-stats ${visibleSections.stats ? 'visible' : ''}`}
        >
          {stats.map((stat, index) => (
            <React.Fragment key={index}>
              <div className="stat-item">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-content">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
              {index < stats.length - 1 && <div className="stat-divider"></div>}
            </React.Fragment>
          ))}
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