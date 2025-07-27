import React from 'react';
import styles from './AboutExpertise.module.scss';

const AboutExpertise = () => {
  const expertiseAreas = [
    {
      title: "Structured Finance",
      description: "Complex financial instruments and multi-layered capital structures",
      icon: "🏛️"
    },
    {
      title: "Commercial Banking",
      description: "Former executive at leading European financial institutions",
      icon: "🏦"
    },
    {
      title: "Cross-Border Capital",
      description: "International capital deployment across multiple jurisdictions",
      icon: "🌍"
    },
    {
      title: "Private Financing",
      description: "Discreet capital solutions for high-impact ventures",
      icon: "💼"
    }
  ];

  const sectors = [
    { name: "Oil & Gas", focus: "Refinery construction, LNG terminals, ESG-aligned projects" },
    { name: "Real Estate", focus: "Smart cities, economic zones, commercial hubs" },
    { name: "Agriculture", focus: "Export farms, agro-processing, food security systems" },
    { name: "Manufacturing", focus: "Heavy industry, machinery, industrial park development" }
  ];

  const credentials = [
    "30+ Years Financial Industry Experience",
    "Former European Banking Executive",
    "Global Capital Network Commander",
    "Cross-Border Transaction Specialist",
    "Strategic Investment Advisor",
    "Legacy-Building Mindset"
  ];

  return (
    <section className={styles.aboutExpertise}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>Professional Excellence</div>
          <h2 className={styles.title}>
            Three Decades of 
            <span className={styles.highlight}> Financial Mastery</span>
          </h2>
          <p className={styles.subtitle}>
            From institutional banking leadership to private finance innovation, 
            Dr. Williams brings unparalleled expertise in structured finance and 
            strategic capital deployment across global markets.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className={styles.expertiseGrid}>
          {expertiseAreas.map((area, index) => (
            <div key={index} className={styles.expertiseCard}>
              <div className={styles.cardIcon}>{area.icon}</div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>

        {/* Career Journey */}
        <div className={styles.careerSection}>
          <div className={styles.careerContent}>
            <div className={styles.careerText}>
              <h3 className={styles.careerTitle}>
                A Legacy of Banking Excellence
              </h3>
              <p className={styles.careerDescription}>
                Dr. Williams' distinguished career began in the corridors of Europe's 
                most prestigious financial institutions, where he mastered the art of 
                structured finance and commercial banking. His transition to private 
                financing represents the evolution of institutional expertise into 
                personalized, high-impact capital solutions.
              </p>
              <div className={styles.credentialsList}>
                {credentials.map((credential, index) => (
                  <div key={index} className={styles.credential}>
                    <span className={styles.credentialBullet}>✓</span>
                    <span className={styles.credentialText}>{credential}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.careerVisual}>
              <div className={styles.experienceCounter}>
                <div className={styles.counterNumber}>30+</div>
                <div className={styles.counterLabel}>Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Expertise */}
        <div className={styles.sectorSection}>
          <h3 className={styles.sectorTitle}>Sector-Specific Mastery</h3>
          <div className={styles.sectorGrid}>
            {sectors.map((sector, index) => (
              <div key={index} className={styles.sectorCard}>
                <h4 className={styles.sectorName}>{sector.name}</h4>
                <p className={styles.sectorFocus}>{sector.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className={styles.philosophyQuote}>
          <blockquote className={styles.quote}>
            "Strategic patience with long-term capital, measured risk frameworks, 
            and ground-level due diligence across jurisdictions — this is how we 
            build lasting partnerships that create generational impact."
          </blockquote>
          <div className={styles.quoteAttribution}>— Dr. Williams</div>
        </div>
      </div>
    </section>
  );
};

export default AboutExpertise;