import React, { useState, useEffect, useRef } from 'react';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
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

  const projects = [
    {
      id: 1,
      title: 'LNG Terminal Development',
      sector: 'oil-gas',
      location: 'West Africa',
      country: 'Nigeria',
      dealSize: '$420M',
      duration: '36 months',
      status: 'Completed',
      year: '2023',
      image: '⚡',
      description: 'State-of-the-art liquefied natural gas terminal with storage capacity of 180,000 cubic meters.',
      impact: [
        '2,500 direct jobs created',
        '15% increase in regional energy capacity',
        'ISO 14001 environmental certification'
      ],
      metrics: {
        roi: '18.5%',
        completion: '100%',
        timeline: 'On Schedule'
      }
    },
    {
      id: 2,
      title: 'Smart City Urban Development',
      sector: 'real-estate',
      location: 'East Africa',
      country: 'Kenya',
      dealSize: '$680M',
      duration: '48 months',
      status: 'Active',
      year: '2024',
      image: '🏙️',
      description: 'Integrated smart city development spanning 350 hectares with residential, commercial, and tech zones.',
      impact: [
        '50,000 housing units planned',
        'Fiber optic infrastructure',
        'Green building standards'
      ],
      metrics: {
        roi: 'Projected 22%',
        completion: '45%',
        timeline: 'Phase 2'
      }
    },
    {
      id: 3,
      title: 'Industrial Zone & SEZ',
      sector: 'manufacturing',
      location: 'Southeast Asia',
      country: 'Vietnam',
      dealSize: '$350M',
      duration: '30 months',
      status: 'Completed',
      year: '2022',
      image: '⚙️',
      description: 'Special Economic Zone with modern manufacturing facilities and logistics infrastructure.',
      impact: [
        '8,000+ manufacturing jobs',
        '45 international tenants',
        '$1.2B export value generated'
      ],
      metrics: {
        roi: '21.3%',
        completion: '100%',
        timeline: 'Completed Early'
      }
    },
    {
      id: 4,
      title: 'Agro-Export Processing Facility',
      sector: 'agriculture',
      location: 'East Africa',
      country: 'Tanzania',
      dealSize: '$115M',
      duration: '24 months',
      status: 'Completed',
      year: '2023',
      image: '🌾',
      description: 'Large-scale processing and cold storage facility for agricultural exports with direct farm partnerships.',
      impact: [
        '12,000 farmers benefited',
        '300% increase in export quality',
        'HACCP certified operations'
      ],
      metrics: {
        roi: '19.8%',
        completion: '100%',
        timeline: 'On Schedule'
      }
    },
    {
      id: 5,
      title: 'Refinery Modernization Project',
      sector: 'oil-gas',
      location: 'Middle East',
      country: 'Qatar',
      dealSize: '$520M',
      duration: '42 months',
      status: 'Active',
      year: '2024',
      image: '⚡',
      description: 'Comprehensive refinery upgrade with advanced desulfurization and automation systems.',
      impact: [
        '40% efficiency improvement',
        'Reduced emissions by 35%',
        'Smart monitoring systems'
      ],
      metrics: {
        roi: 'Projected 20%',
        completion: '60%',
        timeline: 'Phase 3'
      }
    },
    {
      id: 6,
      title: 'Mixed-Use Commercial Complex',
      sector: 'real-estate',
      location: 'West Africa',
      country: 'Ghana',
      dealSize: '$285M',
      duration: '36 months',
      status: 'Active',
      year: '2024',
      image: '🏙️',
      description: 'Premium mixed-use development with Grade A offices, luxury retail, and 5-star hospitality.',
      impact: [
        '3,500 permanent positions',
        'LEED Gold certification',
        'Regional business hub'
      ],
      metrics: {
        roi: 'Projected 19.5%',
        completion: '35%',
        timeline: 'Phase 1'
      }
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'oil-gas', label: 'Oil & Gas', count: projects.filter(p => p.sector === 'oil-gas').length },
    { id: 'real-estate', label: 'Real Estate', count: projects.filter(p => p.sector === 'real-estate').length },
    { id: 'agriculture', label: 'Agriculture', count: projects.filter(p => p.sector === 'agriculture').length },
    { id: 'manufacturing', label: 'Manufacturing', count: projects.filter(p => p.sector === 'manufacturing').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.sector === activeFilter);

  const getSectorColor = (sector) => {
    const colors = {
      'oil-gas': '#f59e0b',
      'real-estate': '#3b82f6',
      'agriculture': '#10b981',
      'manufacturing': '#8b5cf6'
    };
    return colors[sector] || '#6b7280';
  };

  return (
    <section className="portfolio-section" id="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        {/* Header */}
        <div className={`portfolio-header ${isVisible ? 'visible' : ''}`}>
          <span className="portfolio-badge">Transaction Portfolio</span>
          <h2 className="portfolio-title">
            Proven Track Record.
            <span className="gradient-text"> Measurable Impact.</span>
          </h2>
          <p className="portfolio-subtitle">
            A selection of completed and active transactions demonstrating our 
            commitment to transformative capital deployment across emerging markets.
          </p>
        </div>

        {/* Filters */}
        <div className={`portfolio-filters ${isVisible ? 'visible' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="filter-label">{filter.label}</span>
              <span className="filter-count">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className={`portfolio-grid ${isVisible ? 'visible' : ''}`}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card"
              style={{
                '--sector-color': getSectorColor(project.sector),
                animationDelay: `${index * 0.1}s`
              }}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Header */}
              <div className="project-header">
                <div className="project-icon">{project.image}</div>
                <div className="project-status-badge" data-status={project.status}>
                  {project.status}
                </div>
              </div>

              {/* Card Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                
                <div className="project-meta">
                  <div className="meta-item">
                    <span className="meta-icon">📍</span>
                    <span className="meta-text">{project.location}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">📅</span>
                    <span className="meta-text">{project.year}</span>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Metrics */}
                <div className="project-metrics">
                  <div className="metric-item">
                    <div className="metric-label">Deal Size</div>
                    <div className="metric-value">{project.dealSize}</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">Duration</div>
                    <div className="metric-value">{project.duration}</div>
                  </div>
                  <div className="metric-item">
                    <div className="metric-label">ROI</div>
                    <div className="metric-value">{project.metrics.roi}</div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="project-footer">
                <button className="view-details-btn">
                  <span>View Details</span>
                  <span className="btn-arrow">→</span>
                </button>
              </div>

              {/* Hover Overlay */}
              <div className="project-overlay">
                <div className="overlay-content">
                  <div className="overlay-title">Key Impact</div>
                  <ul className="impact-list">
                    {project.impact.slice(0, 3).map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="overlay-cta">Click to learn more</div>
                </div>
              </div>

              <div className="card-accent"></div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`portfolio-summary ${isVisible ? 'visible' : ''}`}>
          <div className="summary-card">
            <div className="summary-icon">💼</div>
            <div className="summary-content">
              <div className="summary-number">$2.37B+</div>
              <div className="summary-label">Total Deal Volume</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">✓</div>
            <div className="summary-content">
              <div className="summary-number">4</div>
              <div className="summary-label">Completed Projects</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🚀</div>
            <div className="summary-content">
              <div className="summary-number">2</div>
              <div className="summary-label">Active Developments</div>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🌍</div>
            <div className="summary-content">
              <div className="summary-number">6</div>
              <div className="summary-label">Countries</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className={`portfolio-cta ${isVisible ? 'visible' : ''}`}>
          <div className="cta-content">
            <h3 className="cta-title">Ready to Join Our Portfolio?</h3>
            <p className="cta-description">
              Submit your project for evaluation and become part of our legacy of transformative investments.
            </p>
            <button className="cta-button">
              <span className="btn-text">Submit Project Brief</span>
              <span className="btn-icon">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="project-modal" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedProject(null)}>×</button>
            
            <div className="modal-header">
              <div className="modal-icon">{selectedProject.image}</div>
              <div className="modal-header-content">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <div className="modal-location">
                  📍 {selectedProject.location} • {selectedProject.country}
                </div>
              </div>
              <div className="modal-status" data-status={selectedProject.status}>
                {selectedProject.status}
              </div>
            </div>

            <div className="modal-body">
              <p className="modal-description">{selectedProject.description}</p>

              <div className="modal-metrics-grid">
                <div className="modal-metric">
                  <div className="modal-metric-label">Deal Size</div>
                  <div className="modal-metric-value">{selectedProject.dealSize}</div>
                </div>
                <div className="modal-metric">
                  <div className="modal-metric-label">Duration</div>
                  <div className="modal-metric-value">{selectedProject.duration}</div>
                </div>
                <div className="modal-metric">
                  <div className="modal-metric-label">ROI</div>
                  <div className="modal-metric-value">{selectedProject.metrics.roi}</div>
                </div>
                <div className="modal-metric">
                  <div className="modal-metric-label">Completion</div>
                  <div className="modal-metric-value">{selectedProject.metrics.completion}</div>
                </div>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Impact & Achievements</h4>
                <ul className="modal-impact-list">
                  {selectedProject.impact.map((item, idx) => (
                    <li key={idx}>
                      <span className="impact-bullet">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h4 className="modal-section-title">Project Status</h4>
                <div className="progress-bar-container">
                  <div className="progress-bar">
                    <div 
                      className="progress-fill" 
                      style={{ 
                        width: selectedProject.metrics.completion,
                        '--sector-color': getSectorColor(selectedProject.sector)
                      }}
                    ></div>
                  </div>
                  <div className="progress-label">
                    {selectedProject.metrics.completion} Complete • {selectedProject.metrics.timeline}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Background */}
      <div className="portfolio-background">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
      </div>
    </section>
  );
};

export default PortfolioSection;