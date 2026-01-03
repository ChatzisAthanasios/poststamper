
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Hash',
      desc: 'Your browser calculates a unique SHA-256 hash of your text. This is a digital fingerprint that changes if even a single comma is altered.',
      icon: 'cloud_upload'
    },
    {
      num: '2',
      title: 'Submit',
      desc: 'The extension sends this hash (and only the hash) to an OpenTimestamps calendar server.',
      icon: 'send'
    },
    {
      num: '3',
      title: 'Anchor',
      desc: 'Over the next few hours, the server aggregates thousands of hashes into a Merkle tree and anchors the root to a Bitcoin transaction.',
      icon: 'anchor'
    },
    {
      num: '4',
      title: 'Upgrade',
      desc: 'Once confirmed on the blockchain, you can "upgrade" your pending timestamp to a complete proof, permanently proving existence at that time.',
      icon: 'upgrade'
    }
  ];

  return (
    <section className="py-24 dark:bg-background-dark" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black mb-12 dark:text-white">How it works</h2>
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black relative shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                    <span className="text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 dark:text-white flex items-center gap-2">
                      {step.title}
                      <span className="material-icons-round text-primary text-lg opacity-0 group-hover:opacity-100 transition-opacity">{step.icon}</span>
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-teal-500/20 rounded-full blur-[120px]"></div>
            <div className="relative bg-slate-900 border border-slate-700 rounded-3xl p-8 lg:p-12 shadow-3xl overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-teal-500"></div>
              <pre className="font-mono text-xs md:text-sm text-slate-300 leading-relaxed">
                <code className="block mb-2 text-slate-500">// Your content never leaves device</code>
                <span className="text-purple-400">const</span> OpenTimestamps = <span className="text-blue-400">require</span>(<span className="text-green-400">'javascript-opentimestamps'</span>);<br/>
                <span className="text-purple-400">const</span> file = <span className="text-blue-400">new</span> <span className="text-yellow-400">File</span>([<span className="text-green-400">'Hello World'</span>], <span className="text-green-400">'doc.txt'</span>);<br/>
                <span className="text-purple-400">const</span> hash = <span className="text-blue-400">await</span> <span className="text-yellow-400">sha256</span>(file);<br/>
                <br/>
                <code className="block mb-2 text-slate-500">// Only the hash is sent to the blockchain</code>
                <span className="text-purple-400">const</span> timestamp = <span className="text-yellow-400">OpenTimestamps.stamp</span>(hash);<br/>
                <span className="text-blue-400">console</span>.<span className="text-yellow-400">log</span>(<span className="text-green-400">'Anchoring initiated...'</span>);
              </pre>
              <div className="mt-8 pt-8 border-t border-slate-800 flex justify-between items-center text-xs text-slate-500 font-bold uppercase tracking-widest">
                <span>Client-Side Logic</span>
                <span className="text-teal-400">Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
