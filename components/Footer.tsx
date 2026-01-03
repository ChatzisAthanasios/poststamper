import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <span className="font-black text-white text-2xl tracking-tight">PostStamper</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest">
            <a href="/privacy.html" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms.html" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/contact.html" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center text-xs text-slate-600 font-medium tracking-tight">
          <p>© {new Date().getFullYear()} PostStamper. Created by Chatzis Athanasios. Build to serve freedom.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;