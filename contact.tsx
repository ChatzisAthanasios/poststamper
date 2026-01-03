import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Contact />
        </main>
        <Footer />
      </div>
    </React.StrictMode>
  );
}