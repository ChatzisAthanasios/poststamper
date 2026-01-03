import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreviews from './components/AppPreviews';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Inspiration from './components/Inspiration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AppPreviews />
        <Features />
        <HowItWorks />
        <Inspiration />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;