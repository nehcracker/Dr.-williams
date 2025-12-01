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
        <title>About Dr. Williams | Private Financier & Financial Expert</title>
        <meta name="description" content="Learn about Dr. Williams, a premier private financier offering expert financial consulting, investment services, and strategic project financing solutions." />
        <meta name="keywords" content="about Dr. Williams, private financier, financial expert, investment consulting, project financing" />
        <link rel="canonical" href="https://drwilliamsfinancier.com/about" />
        <meta property="og:title" content="About Dr. Williams | Private Financier & Financial Expert" />
        <meta property="og:description" content="Learn about Dr. Williams, a premier private financier offering expert financial consulting, investment services, and strategic project financing solutions." />
        <meta property="og:image" content="https://drwilliamsfinancier.com/logo512.png" />
        <meta property="og:url" content="https://drwilliamsfinancier.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Dr. Williams | Private Financier & Financial Expert" />
        <meta name="twitter:description" content="Learn about Dr. Williams, a premier private financier offering expert financial consulting, investment services, and strategic project financing solutions." />
        <meta name="twitter:image" content="https://drwilliamsfinancier.com/logo512.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Dr. Williams",
            "url": "https://drwilliamsfinancier.com/about",
            "description": "Learn about Dr. Williams, a premier private financier offering expert financial consulting, investment services, and strategic project financing solutions.",
            "mainEntity": {
              "@type": "Person",
              "name": "Dr. Williams",
              "jobTitle": "Private Financier",
              "description": "Expert in financial consulting and investment services."
            }
          })}
        </script>
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
