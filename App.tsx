
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AppPreviews from './components/AppPreviews';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Inspiration from './components/Inspiration';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Contact from './components/Contact';

type View = 'home' | 'privacy' | 'terms' | 'contact';

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
        {view === 'home' && (
          <>
            <Hero />
            <AppPreviews />
            <Features />
            <HowItWorks />
            <Inspiration />
            <FAQ />
          </>
        )}
        {view === 'privacy' && <Privacy onBack={() => navigateTo('home')} />}
        {view === 'terms' && <Terms onBack={() => navigateTo('home')} />}
        {view === 'contact' && <Contact onBack={() => navigateTo('home')} />}
      </main>
      <Footer 
        onPrivacy={() => navigateTo('privacy')} 
        onTerms={() => navigateTo('terms')}
        onContact={() => navigateTo('contact')}
      />
    </div>
  );
};

export default App;
