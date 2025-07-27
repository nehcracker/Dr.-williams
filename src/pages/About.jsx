import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '../components/layout/PageWrapper';
import AboutHero from '../components/sections/about/AboutHero/AboutHero';
import AboutExpertise from '../components/sections/about/AboutExpertise/AboutExpertise';
import InvestmentPhilosophy from '../components/sections/about/InvestmentPhilosophy/InvestmentPhilosophy';
import GlobalNetwork from '../components/sections/about/GlobalNetwork/GlobalNetwork';
import ComplianceOverview from '../components/sections/about/ComplianceOverview/ComplianceOverview';



const About = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Dr. Williams | private financier | Financial Investor</title>
        <meta name="description" content="Premier financial consulting and investment services with Dr. 
        Williams, specializing in strategic investments and project financing." />
        <meta name="keywords" content="financial consulting, investment services, strategic Investor,  project financing" />
        <meta property="og:title" content="Dr. Williams | Financial Investor & Financier" />
        <meta property="og:description" content="Premier financial consulting and investment services with Dr. Williams, specializing in strategic investments and project financing." />
      </Helmet>
      <AboutHero />
      <AboutExpertise />
      <InvestmentPhilosophy />
      <GlobalNetwork />
      <ComplianceOverview />
    </PageWrapper>
  );
};

export default About;
