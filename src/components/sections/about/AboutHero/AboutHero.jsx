import React from 'react';
import styles from './AboutHero.module.scss';

const AboutHero = () => {
  const stats = [
    {
      icon: "📈",
      value: "$12.4B+",
      label: "Cumulative Deal Volume"
    },
    {
      icon: "🏆",
      value: "62",
      label: "Major Transactions"
    },
    {
      icon: "🌍",
      value: "17",
      label: "Countries Active"
    },
    {
      icon: "👥",
      value: "30+",
      label: "Years Experience"
    }
  ];

  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundPattern} />
      
      <div className={styles.contentWrapper}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <div className={styles.badgeWrapper}>
            <span className={styles.badge}>
              Private Financier | Strategic Capital Partner | Global Investment Authority
            </span>
          </div>
          
          <h1 className={styles.mainTitle}>
            About Dr. Williams
          </h1>
          
          <p className={styles.subtitle}>
            A Legacy of Banking. A Future of Private Finance.
          </p>
          
          <div className={styles.separator} />
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <div className={styles.descriptionCard}>
            <div className={styles.descriptionContent}>
              <p className={styles.descriptionText}>
                Dr. Williams is one of the world's most respected private financiers, with over 30 years of experience in structured finance, commercial banking, and cross-border capital deployment. A former executive at leading European financial institutions, he transitioned into private financing to support large-scale, high-impact ventures in Oil & Gas, Real Estate, Agriculture, and Manufacturing sectors.
              </p>
              
              <p className={styles.descriptionTextSecondary}>
                Today, Dr. Williams commands a discreet global capital network and has earned a reputation for funding complex projects in high-growth and frontier markets. He operates with strategic insight, institutional discipline, and a legacy-building mindset — financing projects that leave generational impact.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statContent}>
                <div className={styles.statIconWrapper}>
                  <span className={styles.statIcon}>{stat.icon}</span>
                </div>
                
                <div className={styles.statValue}>
                  {stat.value}
                </div>
                
                <div className={styles.statLabel}>
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className={styles.highlightsCard}>
          <div className={styles.highlightsContent}>
            <h3 className={styles.highlightsTitle}>
              Proven Performance, Global Scale
            </h3>
            
            <div className={styles.highlightsGrid}>
              <div className={styles.highlightItem}>
                <div className={styles.highlightLabel}>
                  AVERAGE DEAL SIZE
                </div>
                <div className={styles.highlightValue}>
                  $50M – $750M
                </div>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightLabel}>
                  TRUSTED PARTNERS
                </div>
                <div className={styles.highlightValue}>
                  42 Private Banks
                </div>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightLabel}>
                  INSTITUTIONAL DESKS
                </div>
                <div className={styles.highlightValue}>
                  14 Active Partners
                </div>
              </div>
              
              <div className={styles.highlightItem}>
                <div className={styles.highlightLabel}>
                  SOVEREIGN VEHICLES
                </div>
                <div className={styles.highlightValue}>
                  8 Relationships
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;