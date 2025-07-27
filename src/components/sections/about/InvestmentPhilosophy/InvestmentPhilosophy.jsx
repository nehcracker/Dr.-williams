import React from 'react';
import styles from './InvestmentPhilosophy.module.scss';

const InvestmentPhilosophy = () => {
  const keyPillars = [
    {
      icon: "⏳",
      title: "Strategic Patience",
      subtitle: "Long-term capital deployment",
      description: "We believe in partnerships that span decades, not quarters. Our capital works on your timeline, not market pressures.",
      color: "#a855f7"
    },
    {
      icon: "🛡️",
      title: "Measured Risk Frameworks",
      subtitle: "Collateral-backed security",
      description: "Every investment is structured with comprehensive risk assessment and asset-backed security measures.",
      color: "#3b82f6"
    },
    {
      icon: "🔍",
      title: "Ground-Level Due Diligence",
      subtitle: "Cross-jurisdictional validation",
      description: "Our teams conduct on-site assessments across all jurisdictions, ensuring complete transparency and compliance.",
      color: "#10b981"
    },
    {
      icon: "🌱",
      title: "ESG-Integrated Assessment",
      subtitle: "Sustainable impact focus",
      description: "Environmental, social, and governance factors are integral to our investment decision-making process.",
      color: "#f59e0b"
    },
    {
      icon: "📊",
      title: "Transparent Milestones",
      subtitle: "Performance covenants",
      description: "Clear, measurable milestones with regular reporting and performance tracking throughout the investment lifecycle.",
      color: "#ef4444"
    }
  ];

  const philosophyStats = [
    { number: "62", label: "Major Transactions", suffix: "+" },
    { number: "17", label: "Active Countries", suffix: "" },
    { number: "12.4", label: "Billion in Volume", suffix: "B+" },
    { number: "30", label: "Years Experience", suffix: "+" }
  ];

  const coreValues = [
    {
      title: "Legacy Building",
      description: "Every investment should create lasting value for generations"
    },
    {
      title: "Partnership First",
      description: "Capital relationships built on mutual trust and shared vision"
    },
    {
      title: "Global Perspective",
      description: "Local expertise with international best practices"
    },
    {
      title: "Institutional Discipline",
      description: "Bank-grade processes with private market flexibility"
    }
  ];

  return (
    <section className={styles.investmentPhilosophy}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>Investment Philosophy</div>
          <h2 className={styles.title}>
            Capital with Conviction.
            <span className={styles.highlight}> Governance with Precision.</span>
          </h2>
          <p className={styles.subtitle}>
            Dr. Williams believes that real value lies in long-term partnerships, 
            rigorous due diligence, and visionary execution. Every funding engagement 
            is structured to align capital, governance, and impact.
          </p>
        </div>

        {/* Philosophy Stats */}
        <div className={styles.statsGrid}>
          {philosophyStats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>
                {stat.number}<span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Key Pillars Section */}
        <div className={styles.pillarsSection}>
          <h3 className={styles.pillarsTitle}>Five Key Pillars</h3>
          <div className={styles.pillarsGrid}>
            {keyPillars.map((pillar, index) => (
              <div key={index} className={styles.pillarCard}>
                <div 
                  className={styles.pillarIcon}
                  style={{ '--pillar-color': pillar.color }}
                >
                  {pillar.icon}
                </div>
                <div className={styles.pillarContent}>
                  <h4 className={styles.pillarTitle}>{pillar.title}</h4>
                  <p className={styles.pillarSubtitle}>{pillar.subtitle}</p>
                  <p className={styles.pillarDescription}>{pillar.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className={styles.valuesSection}>
          <h3 className={styles.valuesTitle}>Core Values</h3>
          <div className={styles.valuesGrid}>
            {coreValues.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <h4 className={styles.valueTitle}>{value.title}</h4>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Signature Quote */}
        <div className={styles.signatureQuote}>
          <div className={styles.quoteContent}>
            <blockquote className={styles.quote}>
              "We don't just deploy capital. We fund legacy."
            </blockquote>
            <div className={styles.signature}>
              <div className={styles.signatureLine}></div>
              <div className={styles.signatureName}>Dr. Williams</div>
            </div>
          </div>
          <div className={styles.quoteVisual}>
            <div className={styles.visualElement}>
              <div className={styles.centralDot}></div>
              <div className={styles.orbitRing}></div>
              <div className={styles.orbitRing}></div>
            </div>
          </div>
        </div>

        {/* Investment Approach */}
        <div className={styles.approachSection}>
          <div className={styles.approachContent}>
            <h3 className={styles.approachTitle}>Our Investment Approach</h3>
            <div className={styles.approachText}>
              <p>
                Every investment decision begins with a fundamental question: 
                Will this create lasting value that benefits all stakeholders? 
                Our approach combines institutional rigor with entrepreneurial vision, 
                ensuring that capital deployment serves both financial returns and 
                societal impact.
              </p>
              <p>
                Through decades of experience across global markets, we've developed 
                frameworks that balance opportunity with responsibility, growth with 
                sustainability, and innovation with proven fundamentals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentPhilosophy;