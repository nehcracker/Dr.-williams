import React, { useState } from 'react';
import './SectorsSection.scss';

const SectorsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const sectors = [
    {
      title: "Oil & Gas",
      items: [
        "Upstream/Downstream",
        "Refinery Construction",
        "LNG Terminals & Pipelines",
        "ESG-compliant Projects"
      ]
    },
    {
      title: "Real Estate",
      items: [
        "Ultra-high-end Residential",
        "Urban Smart Cities",
        "Mixed-use Commercial Developments",
        "Private Industrial Zones"
      ]
    },
    {
      title: "Agriculture",
      items: [
        "Large-scale Agro Export Farms",
        "Food Security Infrastructure",
        "AgTech Deployments",
        "Cold Chain & Logistics Finance"
      ]
    },
    {
      title: "Manufacturing",
      items: [
        "Special Economic Zones",
        "Equipment Leasing & Factory Finance",
        "Advanced Industrial Systems"
      ]
    }
  ];

  return (
    <section className="sectors-section" id="sectors">
      <div className="container">
        <h2 className="section-title">Focused Capital. Real-World Impact.</h2>
        
        <div className="sectors-tabs">
          <div className="tabs-navigation">
            {sectors.map((sector, index) => (
              <button 
                key={index}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {sector.title}
              </button>
            ))}
          </div>
          
          <div className="tab-content">
            <h3 className="tab-title">{sectors[activeTab].title}</h3>
            <ul className="sector-items">
              {sectors[activeTab].items.map((item, index) => (
                <li key={index} className="sector-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
