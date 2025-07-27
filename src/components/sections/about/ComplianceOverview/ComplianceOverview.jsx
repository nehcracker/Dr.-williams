import React from 'react';
import { 
  FaShieldAlt as Shield, 
  FaLock as Lock, 
  FaGlobe as Globe, 
  FaClipboardCheck as FileCheck, 
  FaAward as Award, 
  FaEye as Eye,
} from 'react-icons/fa';
import styles from './ComplianceOverview.module.scss';

const ComplianceOverview = () => {
  const complianceStandards = [
    {
      icon: Shield,
      title: 'FATF AML/KYC',
      description: 'Full anti-money laundering and know-your-customer protocols',
      badge: 'Financial Action Task Force'
    },
    {
      icon: Lock,
      title: 'GDPR Compliant',
      description: 'Cross-border data protection and privacy safeguards',
      badge: 'EU Data Protection'
    },
    {
      icon: Globe,
      title: 'OECD Standards',
      description: 'Anti-corruption principles and international best practices',
      badge: 'Global Compliance'
    },
    {
      icon: FileCheck,
      title: 'Independent Oversight',
      description: 'Third-party risk assessment and legal validation',
      badge: 'External Verification'
    },
    {
      icon: Award,
      title: 'Regulatory Adherence',
      description: 'Strict ethical standards across all jurisdictions',
      badge: 'Multi-Jurisdictional'
    },
    {
      icon: Eye,
      title: 'Secure Documentation',
      description: 'Encrypted submissions and confidential data handling',
      badge: 'Bank-Grade Security'
    }
  ];

  const trustMetrics = [
    { label: 'Years of Compliance Excellence', value: '30+' },
    { label: 'Regulatory Jurisdictions', value: '17' },
    { label: 'Zero Compliance Violations', value: '100%' },
    { label: 'Audit Success Rate', value: '100%' }
  ];

  return (
    <section className={styles.complianceOverview}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.title}>Compliance & Integrity</h2>
            <p className={styles.subtitle}>
              Trust is the Foundation. Governance is the Guarantee.
            </p>
            <p className={styles.description}>
              Dr. Williams adheres to strict ethical and regulatory standards, 
              ensuring every transaction meets the highest levels of compliance 
              and transparency across all jurisdictions.
            </p>
          </div>
        </div>

        {/* Trust Metrics */}
        <div className={styles.trustMetrics}>
          {trustMetrics.map((metric, index) => (
            <div key={index} className={styles.metric}>
              <div className={styles.metricValue}>{metric.value}</div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Compliance Standards Grid */}
        <div className={styles.standardsGrid}>
          {complianceStandards.map((standard, index) => {
            const IconComponent = standard.icon;
            return (
              <div key={index} className={styles.standardCard}>
                <div className={styles.standardIcon}>
                  <IconComponent size={32} />
                </div>
                <div className={styles.standardContent}>
                  <h3 className={styles.standardTitle}>{standard.title}</h3>
                  <p className={styles.standardDescription}>{standard.description}</p>
                  <div className={styles.standardBadge}>{standard.badge}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Compliance Statement */}
        <div className={styles.complianceStatement}>
          <div className={styles.statementIcon}>
            <Shield size={48} />
          </div>
          <div className={styles.statementContent}>
            <h3 className={styles.statementTitle}>
              Uncompromising Standards
            </h3>
            <p className={styles.statementText}>
              "Every transaction we structure is built on a foundation of regulatory 
              excellence and ethical integrity. Our compliance framework isn't just 
              about meeting standards—it's about exceeding them to protect our 
              clients and preserve institutional trust."
            </p>
            <div className={styles.statementSignature}>
              — Dr. Williams, Private Financier
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className={styles.securityFeatures}>
          <h3 className={styles.featuresTitle}>Security & Confidentiality</h3>
          <div className={styles.featuresGrid}>
            <div className={styles.feature}>
              <Lock className={styles.featureIcon} size={24} />
              <span>End-to-End Encryption</span>
            </div>
            <div className={styles.feature}>
              <FileCheck className={styles.featureIcon} size={24} />
              <span>NDA Protection</span>
            </div>
            <div className={styles.feature}>
              <Eye className={styles.featureIcon} size={24} />
              <span>Secure Data Rooms</span>
            </div>
            <div className={styles.feature}>
              <Shield className={styles.featureIcon} size={24} />
              <span>Regulatory Audit Trails</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceOverview;