
import React from 'react';

const Features: React.FC = () => {
  const featureList = [
    {
      icon: 'public',
      title: 'Social Everywhere',
      desc: "Native integration for X, Facebook, Instagram, and LinkedIn. Stamp any post or comment with a single click.",
      color: 'purple'
    },
    {
      icon: 'psychology',
      title: 'AI Transparency',
      desc: "Stamp responses from ChatGPT and Claude.ai. Maintain a verifiable record of your AI-assisted creative process.",
      color: 'teal'
    },
    {
      icon: 'verified',
      title: 'Bitcoin Anchored',
      desc: "Every stamp is mathematically secured by the Bitcoin blockchain. Immutable proof that lasts forever.",
      color: 'blue'
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 dark:text-white">Why use PostStamper?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            In an age of AI and deepfakes, proving <span className="italic font-semibold text-slate-800 dark:text-slate-200">when</span> you said something is as important as <span className="italic font-semibold text-slate-800 dark:text-slate-200">what</span> you said.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featureList.map((f, i) => (
            <div key={i} className="group p-8 rounded-3xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:shadow-2xl hover:shadow-purple-500/10 transform hover:-translate-y-2">
              <div className={`w-14 h-14 ${f.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400' : f.color === 'teal' ? 'bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400' : 'bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400'} rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:rotate-6`}>
                <span className="material-icons-round text-3xl">{f.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 dark:text-white">{f.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
