import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SectorsSection from '../components/sections/SectorsSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import NetworkSection from '../components/sections/NetworkSection';
import SubmissionSection from '../components/sections/SubmissionSection';


const Home = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Dr. Williams | private financier | Financial Investor</title>
        <meta name="description" content="Premier financial consulting and investment services with Dr. 
        Williams, specializing in strategic investments and project & capital financing." />
        <meta name="keywords" content="financial consulting, Project financing, Debt capital, equity capital financing, Loans, 
        Working capital, real estate financing, Investment partner, by off, offshore real estate  investment services, strategic Investor,  project financing" />
        <meta property="og:title" content="Dr. Williams | Financial Investor & Financier" />
        <meta property="og:description" content="Premier financial consulting and investment services with Dr. Williams, specializing in strategic investments and project financing." />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <PhilosophySection />
      <PortfolioSection />
      <NetworkSection />
      <SubmissionSection />
    </PageWrapper>
  );
};

export default Home;
