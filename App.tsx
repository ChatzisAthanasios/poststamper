
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreviews from './components/AppPreviews';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Privacy from './components/Privacy';

type View = 'home' | 'privacy';

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');

  const navigateTo = (newView: View) => {
    setView(newView);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onHome={() => navigateTo('home')} />
      <main className="flex-grow">
        {view === 'home' ? (
          <>
            <Hero />
            <AppPreviews />
            <Features />
            <HowItWorks />
            <FAQ />
          </>
        ) : (
          <Privacy onBack={() => navigateTo('home')} />
        )}
      </main>
      <Footer onPrivacy={() => navigateTo('privacy')} />
    </div>
  );
};

export default App;
