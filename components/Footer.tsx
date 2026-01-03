
import React from 'react';

interface FooterProps {
  onPrivacy: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacy }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-3">
            <img 
              src="icon128.png" 
              alt="PostStamper Logo" 
              className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(124,58,237,0.3)]"
            />
            <span className="font-black text-white text-2xl tracking-tight">PostStamper</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-sm font-bold uppercase tracking-widest">
            <button onClick={onPrivacy} className="hover:text-white transition-colors">Privacy Policy</button>
            <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
            <a className="hover:text-white transition-colors" href="#">Contact</a>
            <a className="hover:text-white transition-colors" href="#">Support</a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800/50 text-center text-xs text-slate-600 font-medium tracking-tight">
          <p>© {new Date().getFullYear()} PostStamper. All rights reserved. Supporting X, Facebook, LinkedIn, ChatGPT, and more.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
