import React from 'react';
import HeroBanner from '../components/HeroBanner';
import About from '../components/About';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <About />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
