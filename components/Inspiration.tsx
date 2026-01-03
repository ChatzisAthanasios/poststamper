
import React from 'react';

const Inspiration: React.FC = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/5 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-block p-3 rounded-2xl bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 mb-6 shadow-sm">
            <span className="material-icons-round text-3xl">auto_awesome</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 dark:text-white leading-tight">
            The Spark Behind <span className="gradient-text">PostStamper</span>
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
            <p>
              My journey into the world of digital proof began with a deep dive into the cypherpunk ethos. I became profoundly inspired by the work of <span className="text-slate-900 dark:text-white font-bold">Rob Todd</span> and the revolutionary concept of <span className="text-slate-900 dark:text-white font-bold">OpenTimestamps</span>.
            </p>
            <p>
              Discovering that <span className="text-slate-900 dark:text-white font-bold">Bitcoin</span> could serve as more than just a financial asset—that it could function as a globally distributed, immutable ledger for truth—changed everything for me. It meant we no longer had to trust centralized authorities to prove *when* a piece of digital information existed.
            </p>
            <p className="border-l-4 border-primary pl-6 py-2 italic text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-800/50 rounded-r-xl">
              "Truth should not depend on permission. It should be mathematically verifiable by anyone, anywhere."
            </p>
            <p>
              PostStamper is my way of bringing this power to everyday social media users. It's a tribute to the decentralized future, built to serve freedom and ensure that our digital footprints remain tamper-proof for generations to come.
            </p>
          </div>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-400">
              CA
            </div>
            <div>
              <p className="font-bold dark:text-white text-sm">Chatzis Athanasios</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Creator of PostStamper</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
