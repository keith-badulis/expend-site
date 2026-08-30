import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { WhyChoose } from '../components/WhyChoose';
import { Reviews } from '../components/Reviews';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';

export const Home: React.FC = () => {
  return (
    <div className="page-wrapper">
      <main>
        <Hero />
        <Features />
        <WhyChoose />
        <Reviews />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
