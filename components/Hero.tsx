import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 hero-gradient overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 mb-8 uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Stamping posts on X, FB, LinkedIn & AI Chats
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 dark:text-white leading-[1.1]">
            Stamp your digital legacy on the <span className="gradient-text">Blockchain</span>.
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            Instantly prove existence of your posts and comments across <span className="text-slate-800 dark:text-white font-semibold">X.com, Facebook, Instagram, YouTube, LinkedIn</span>, and even <span className="text-slate-800 dark:text-white font-semibold">ChatGPT & Claude.ai</span> conversations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <a 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-bold text-white bg-primary rounded-2xl hover:bg-opacity-90 transition-all shadow-2xl shadow-purple-500/40 cta-glow transform hover:-translate-y-1" 
              href="https://chromewebstore.google.com/detail/poststamper/eibpfjfbhpfgfineikinhlojgfnddnli"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-icons-round">add_to_queue</span>
              Add to Chrome
            </a>
            <a className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 text-lg font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-lg" href="#how-it-works">
              <span className="material-icons-round">play_circle_outline</span>
              How it Works
            </a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 grayscale opacity-50 dark:opacity-40">
            <div className="flex items-center gap-1.5 font-bold tracking-tighter text-lg">X.com</div>
            <div className="flex items-center gap-1.5 font-bold tracking-tighter text-lg">Facebook</div>
            <div className="flex items-center gap-1.5 font-bold tracking-tighter text-lg">LinkedIn</div>
            <div className="flex items-center gap-1.5 font-bold tracking-tighter text-lg">ChatGPT</div>
            <div className="flex items-center gap-1.5 font-bold tracking-tighter text-lg">Claude</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;