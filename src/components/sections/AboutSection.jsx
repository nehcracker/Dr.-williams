import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './AboutSection.scss';

const AboutSection = () => {
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

  const stats = [
    { 
      number: '$12.4B+', 
      label: 'Deal Volume Financed',
      icon: '💰'
    },
    { 
      number: '3', 
      label: 'Continents',
      icon: '🌍'
    },
    { 
      number: '18', 
      label: 'Countries Active',
      icon: '🗺️'
    },
    { 
      number: '60+', 
      label: 'Institutional Partners',
      icon: '🤝'
    }
  ];

  const credentials = [
    {
      title: 'Founding Member',
      organization: 'Global Capital Advisory Circle (GCAC)',
      icon: '🏆'
    },
    {
      title: 'Alumni',
      organization: 'London School of Economics (LSE), Executive Finance, 1995',
      icon: '🎓'
    }
  ];

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="about-container">
        {/* Section Header */}
        <div className={`about-header ${isVisible ? 'visible' : ''}`}>
          <span className="about-badge">About Dr. Williams</span>
          <h2 className="about-title">
            A Legacy of Banking.
            <span className="gradient-text"> A Future of Private Finance.</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          {/* Text Content */}
          <div className={`about-content ${isVisible ? 'visible' : ''}`}>
            <div className="about-narrative">
              <p className="narrative-highlight">
                Dr. Williams, a former executive in the European banking sector, 
                transitioned into private finance to bridge the capital divide in 
                frontier and emerging markets.
              </p>
              <p className="narrative-text">
                His sharp insight into risk, regulatory frameworks, and sovereign 
                finance has enabled the funding of large-scale developments that 
                redefine economies. With over 30 years of experience, Dr. Williams 
                commands a discreet but expansive network of private banks, 
                institutional investors, and sovereign wealth desks.
              </p>
              <p className="narrative-text">
                His capital deployment strategy is deeply analytical, impact-driven, 
                and relationship-focused — building partnerships that create 
                generational value.
              </p>
            </div>

            {/* Call to Action */}
            <div className="about-cta">
              <Link to="/about" className="btn-learn-more">
                <span className="btn-text">Explore Full Profile</span>
                <span className="btn-arrow">→</span>
              </Link>
            </div>
          </div>

          {/* Statistics Cards */}
          <div className={`about-stats ${isVisible ? 'visible' : ''}`}>
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="stat-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-content">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                  <div className="stat-glow"></div>
                </div>
              ))}
            </div>

            {/* Credentials */}
            <div className="credentials-section">
              <h3 className="credentials-title">Distinguished Credentials</h3>
              <div className="credentials-list">
                {credentials.map((credential, index) => (
                  <div key={index} className="credential-item">
                    <div className="credential-icon">{credential.icon}</div>
                    <div className="credential-content">
                      <div className="credential-title">{credential.title}</div>
                      <div className="credential-org">{credential.organization}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Preview */}
        <div className={`about-timeline ${isVisible ? 'visible' : ''}`}>
          <div className="timeline-card">
            <div className="timeline-content">
              <div className="timeline-icon">📈</div>
              <div className="timeline-text">
                <h4 className="timeline-title">30+ Years of Excellence</h4>
                <p className="timeline-description">
                  From institutional banking leadership to private finance innovation, 
                  commanding capital deployment across three continents.
                </p>
              </div>
            </div>
            <div className="timeline-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
            </div>
          </div>
        </div>

        {/* Philosophy Highlight */}
        <div className={`about-philosophy ${isVisible ? 'visible' : ''}`}>
          <blockquote className="philosophy-quote">
            <div className="quote-mark">"</div>
            <p className="quote-text">
              We don't just deploy capital. We fund legacy.
            </p>
            <div className="quote-attribution">
              <div className="attribution-line"></div>
              <span className="attribution-text">Dr. Williams</span>
            </div>
          </blockquote>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="about-decoration">
        <div className="decoration-circle decoration-circle-1"></div>
        <div className="decoration-circle decoration-circle-2"></div>
        <div className="decoration-grid"></div>
      </div>
    </section>
  );
};

export default AboutSection;