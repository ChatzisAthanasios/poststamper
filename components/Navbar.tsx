import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a 
            href="/index.html"
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity group"
          >
            <img 
              src="/icon128.png" 
              alt="PostStamper Logo" 
              className="w-8 h-8 object-contain shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.5)] transition-all"
            />
            <span className="font-bold text-xl tracking-tight dark:text-white">PostStamper</span>
          </a>
          
          <div className="flex items-center">
            <a 
              className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-opacity-90 transition-all shadow-lg shadow-purple-500/30" 
              href="https://chromewebstore.google.com/detail/poststamper/eibpfjfbhpfgfineikinhlojgfnddnli"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Extension
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;