
import React from 'react';

interface NavbarProps {
  onHome: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHome }) => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button 
            onClick={onHome}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <span className="material-icons-round text-primary text-3xl">verified_user</span>
            <span className="font-bold text-xl tracking-tight dark:text-white">PostStamper</span>
          </button>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#features">Features</a>
              <a className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#how-it-works">How it Works</a>
              <a className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-purple-500/30" href="#">Get Extension</a>
            </div>
          </div>

          <div className="md:hidden">
            <button className="p-2 rounded-md text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons-round">menu</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
