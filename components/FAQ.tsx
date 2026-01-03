
import React from 'react';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: 'Which platforms are supported?',
      a: 'PostStamper officially supports X (Twitter), Facebook, Instagram, YouTube, LinkedIn, ChatGPT, and Claude.ai. You can also manually stamp any text from any other website.'
    },
    {
      q: 'How do I stamp an AI conversation?',
      a: 'On ChatGPT or Claude.ai, PostStamper adds a "Stamp Response" button next to every AI message. Clicking it generates a local hash and anchors the specific output to the blockchain.'
    },
    {
      q: 'Is this free?',
      a: 'Yes, the extension is free to use. OpenTimestamps public calendar servers aggregate thousands of proofs into a single Bitcoin transaction, making it cost-efficient for everyone.'
    },
    {
      q: 'Can I verify proofs without PostStamper?',
      a: 'Absolutely. The .ots file format is an open standard. You can verify your proofs using any OpenTimestamps-compatible verifier, including official CLI tools or third-party web verifiers.'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-center mb-16 dark:text-white">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <details key={i} className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-bold text-lg dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 list-none">
                <span>{faq.q}</span>
                <span className="material-icons-round transition-transform duration-300 group-open:rotate-180 text-primary">keyboard_arrow_down</span>
              </summary>
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 leading-relaxed font-medium border-t border-slate-100 dark:border-slate-700/50 pt-6">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
