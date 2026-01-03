import React, { useEffect } from 'react';

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <a 
          href="/index.html"
          className="mb-8 inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all group"
        >
          <span className="material-icons-round">arrow_back</span>
          Back to Home
        </a>

        <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-700">
          <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
            <span className="material-icons-round text-5xl">alternate_email</span>
          </div>
          
          <h1 className="text-4xl font-black mb-4 dark:text-white">Get in Touch</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Have questions about PostStamper or need assistance with your blockchain verifications? We're here to help.
          </p>

          <div className="inline-flex flex-col items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Official Email</span>
            <a 
              href="mailto:chatzis.ath@hotmail.com" 
              className="text-2xl md:text-3xl font-bold text-primary hover:underline transition-all break-all"
            >
              chatzis.ath@hotmail.com
            </a>
          </div>

          <div className="mt-20 pt-10 border-t border-slate-100 dark:border-slate-700 px-8">
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
              Response time is typically within 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;