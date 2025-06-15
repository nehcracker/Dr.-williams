import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageWrapper from '../components/layout/PageWrapper';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import SectorsSection from '../components/sections/SectorsSection';
import PhilosophySection from '../components/sections/PhilosophySection';
import PortfolioSection from '../components/sections/PortfolioSection';
import NetworkSection from '../components/sections/NetworkSection';


const Home = () => {
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
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <PhilosophySection />
      <PortfolioSection />
      <NetworkSection />
    </PageWrapper>
  );
};

export default Home;
