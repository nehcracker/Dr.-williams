import React from 'react';
import './PortfolioSection.scss';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "LNG Terminal – West Africa",
      amount: "$420M",
      year: "2023",
      description: "Private equity + bridge debt facility for 36-month phased construction.",
      status: "Active funding, Phase II."
    },
    {
      title: "Smart City Development – Eastern Europe",
      amount: "$680M",
      year: "2021",
      description: "Residential, commercial, and innovation hub with tech park.",
      status: "Sold to sovereign-backed REIT."
    },
    {
      title: "Agro Export Facility – Southeast Asia",
      amount: "$115M",
      year: "2022",
      description: "Financing for land acquisition, processing plant, and cold storage.",
      status: "Fully funded and operational."
    }
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio Highlights</h2>
        <p className="section-subtitle">Select Engagements</p>
        
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div key={index} className="portfolio-card">
              <div className="portfolio-header">
                <div className="portfolio-amount">{item.amount}</div>
                <div className="portfolio-year">{item.year}</div>
              </div>
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              <div className="portfolio-status">
                <span className="status-label">Status:</span> {item.status}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
