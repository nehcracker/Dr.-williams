import React, { useState } from 'react';
import styles from './GlobalNetwork.module.scss';

const GlobalNetwork = () => {
  const [activeRegion, setActiveRegion] = useState('europe');

  const networkStats = [
    { number: "60", suffix: "+", label: "Regional Advisors", icon: "👥" },
    { number: "17", suffix: "", label: "Active Countries", icon: "🌍" },
    { number: "42", suffix: "", label: "Private Banks", icon: "🏛️" },
    { number: "14", suffix: "", label: "Institutional Desks", icon: "📊" },
    { number: "8", suffix: "", label: "Sovereign Vehicles", icon: "🏛️" }
  ];

  const regions = {
    europe: {
      title: "Europe",
      countries: ["Switzerland", "United Kingdom", "Germany", "France", "Netherlands"],
      partnerships: [
        { name: "UBS", type: "Private Banking", status: "active" },
        { name: "Lombard Odier", type: "Wealth Management", status: "active" },
        { name: "Credit Suisse", type: "Investment Banking", status: "longstanding" },
        { name: "HSBC Private Bank", type: "Commercial Banking", status: "active" }
      ],
      description: "European operations centered in Zurich and London, with deep institutional relationships across major financial centers."
    },
    africa: {
      title: "Africa",
      countries: ["Kenya", "Nigeria", "South Africa", "Ghana", "Morocco"],
      partnerships: [
        { name: "Standard Chartered", type: "Commercial Banking", status: "active" },
        { name: "Absa Group", type: "Investment Banking", status: "active" },
        { name: "Ecobank", type: "Regional Banking", status: "strategic" },
        { name: "IFC Africa", type: "Development Finance", status: "collaborative" }
      ],
      description: "Strong presence across key African markets with focus on infrastructure and natural resource financing."
    },
    asia: {
      title: "Asia",
      countries: ["Singapore", "UAE", "India", "Hong Kong", "Malaysia"],
      partnerships: [
        { name: "DBS Bank", type: "Commercial Banking", status: "active" },
        { name: "Emirates NBD", type: "Regional Banking", status: "strategic" },
        { name: "ICICI Bank", type: "Corporate Banking", status: "active" },
        { name: "Standard Chartered Asia", type: "Trade Finance", status: "longstanding" }
      ],
      description: "Strategic positioning across Asian financial hubs with emphasis on trade finance and cross-border transactions."
    }
  };

  const globalServices = [
    {
      title: "Private Data Rooms",
      description: "Secure, encrypted document sharing across jurisdictions",
      icon: "🔒"
    },
    {
      title: "Compliance Clearinghouses",
      description: "Multi-jurisdictional regulatory and compliance validation",
      icon: "⚖️"
    },
    {
      title: "Regional Structuring Teams",
      description: "Local expertise for complex cross-border transactions",
      icon: "🏗️"
    },
    {
      title: "Field Assessment Network",
      description: "On-ground due diligence across all active markets",
      icon: "🔍"
    }
  ];

  const institutionalPartners = [
    { name: "UBS", sector: "Private Banking", region: "Global" },
    { name: "Lombard Odier", sector: "Wealth Management", region: "Europe" },
    { name: "Standard Chartered", sector: "Commercial Banking", region: "Global" },
    { name: "IFC-Related Desks", sector: "Development Finance", region: "Emerging Markets" },
    { name: "Emirates NBD", sector: "Regional Banking", region: "MENA" },
    { name: "DBS Bank", sector: "Commercial Banking", region: "Asia-Pacific" }
  ];

  return (
    <section className={styles.globalNetwork}>
      <div className={styles.container}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.badge}>Global Network</div>
          <h2 className={styles.title}>
            Capital Moves Faster With
            <span className={styles.highlight}> The Right Partners</span>
          </h2>
          <p className={styles.subtitle}>
            Dr. Williams collaborates with a handpicked network of elite advisors, 
            institutional banks, legal firms, and government desks across three continents, 
            ensuring seamless execution of complex international transactions.
          </p>
        </div>

        {/* Network Stats */}
        <div className={styles.statsGrid}>
          {networkStats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statIcon}>{stat.icon}</div>
              <div className={styles.statNumber}>
                {stat.number}<span className={styles.statSuffix}>{stat.suffix}</span>
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Regional Network */}
        <div className={styles.regionalSection}>
          <h3 className={styles.sectionTitle}>Regional Network</h3>
          
          {/* Region Tabs */}
          <div className={styles.regionTabs}>
            {Object.keys(regions).map((regionKey) => (
              <button
                key={regionKey}
                className={`${styles.regionTab} ${activeRegion === regionKey ? styles.active : ''}`}
                onClick={() => setActiveRegion(regionKey)}
              >
                {regions[regionKey].title}
              </button>
            ))}
          </div>

          {/* Active Region Content */}
          <div className={styles.regionContent}>
            <div className={styles.regionInfo}>
              <h4 className={styles.regionTitle}>{regions[activeRegion].title}</h4>
              <p className={styles.regionDescription}>
                {regions[activeRegion].description}
              </p>
              
              <div className={styles.countriesList}>
                <h5 className={styles.countriesTitle}>Active Countries:</h5>
                <div className={styles.countries}>
                  {regions[activeRegion].countries.map((country, index) => (
                    <span key={index} className={styles.country}>
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.partnerships}>
              <h5 className={styles.partnershipsTitle}>Key Partnerships</h5>
              <div className={styles.partnershipsList}>
                {regions[activeRegion].partnerships.map((partner, index) => (
                  <div key={index} className={styles.partnershipCard}>
                    <div className={styles.partnerInfo}>
                      <h6 className={styles.partnerName}>{partner.name}</h6>
                      <p className={styles.partnerType}>{partner.type}</p>
                    </div>
                    <div className={`${styles.partnerStatus} ${styles[partner.status]}`}>
                      {partner.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Global Services */}
        <div className={styles.servicesSection}>
          <h3 className={styles.sectionTitle}>Global Infrastructure Services</h3>
          <div className={styles.servicesGrid}>
            {globalServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Institutional Partners */}
        <div className={styles.institutionalSection}>
          <h3 className={styles.sectionTitle}>Institutional Partners</h3>
          <div className={styles.partnersGrid}>
            {institutionalPartners.map((partner, index) => (
              <div key={index} className={styles.institutionalCard}>
                <div className={styles.institutionalInfo}>
                  <h4 className={styles.institutionalName}>{partner.name}</h4>
                  <div className={styles.institutionalDetails}>
                    <span className={styles.institutionalSector}>{partner.sector}</span>
                    <span className={styles.institutionalRegion}>{partner.region}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Network Advantage */}
        <div className={styles.advantageSection}>
          <div className={styles.advantageContent}>
            <div className={styles.advantageText}>
              <h3 className={styles.advantageTitle}>
                The Network Advantage
              </h3>
              <p className={styles.advantageDescription}>
                Three decades of relationship building have created an unparalleled 
                network of trust across global financial centers. This network enables 
                rapid deal execution, enhanced due diligence, and access to 
                opportunities that would otherwise remain invisible.
              </p>
              <div className={styles.advantageFeatures}>
                <div className={styles.feature}>
                  <span className={styles.featureBullet}>•</span>
                  <span>24/7 global coverage across time zones</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Direct access to decision makers</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Multi-jurisdictional legal and compliance support</span>
                </div>
                <div className={styles.feature}>
                  <span className={styles.featureBullet}>•</span>
                  <span>Real-time market intelligence and deal flow</span>
                </div>
              </div>
            </div>
            <div className={styles.advantageVisual}>
              <div className={styles.networkMap}>
                <div className={styles.centralHub}>
                  <div className={styles.hubCore}>DW</div>
                  <div className={styles.hubLabel}>Dr. Williams</div>
                </div>
                <div className={styles.networkNodes}>
                  <div className={`${styles.networkNode} ${styles.europe}`}>EU</div>
                  <div className={`${styles.networkNode} ${styles.africa}`}>AF</div>
                  <div className={`${styles.networkNode} ${styles.asia}`}>AS</div>
                </div>
                <div className={styles.connectionLines}>
                  <div className={`${styles.connectionLine} ${styles.toEurope}`}></div>
                  <div className={`${styles.connectionLine} ${styles.toAfrica}`}></div>
                  <div className={`${styles.connectionLine} ${styles.toAsia}`}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;