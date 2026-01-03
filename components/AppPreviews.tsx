
import React from 'react';

const PhoneFrame: React.FC<{ children: React.ReactNode; title: string }> = ({ children, title }) => (
  <div className="flex flex-col items-center">
    <div className="iphone-frame w-[300px] h-[580px] flex flex-col">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 pt-10 text-center text-white shrink-0">
        <div className="flex justify-center mb-3">
          <div className="w-16 h-16 rounded-full bg-white/10 p-1 backdrop-blur-sm shadow-inner flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-2xl overflow-hidden">
               <img src="/icon128.png" alt="Logo" className="w-12 h-12 object-contain" />
            </div>
          </div>
        </div>
        <h2 className="font-bold text-xl tracking-tight">PostStamper</h2>
        <p className="text-[10px] opacity-80 mt-1 uppercase tracking-widest">Blockchain-verified timestamps</p>
      </div>
      {children}
    </div>
    <p className="mt-8 font-bold text-slate-800 dark:text-slate-200 text-lg uppercase tracking-wide">{title}</p>
  </div>
);

const AppPreviews: React.FC = () => {
  return (
    <section className="py-20 dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 items-start">
          
          {/* Create Proofs */}
          <PhoneFrame title="Stamp Any Post">
            <div className="flex bg-slate-900 text-slate-400 text-xs uppercase font-bold shrink-0">
              <div className="flex-1 p-4 text-center border-b-2 border-primary text-white bg-slate-800/50 flex items-center justify-center gap-1.5">
                <span className="material-icons-round text-sm">edit</span> Stamp
              </div>
              <div className="flex-1 p-4 text-center border-b border-slate-800 flex items-center justify-center gap-1.5 opacity-60">
                <span className="material-icons-round text-sm text-slate-500">history</span> History
              </div>
              <div className="flex-1 p-4 text-center border-b border-slate-800 flex items-center justify-center gap-1.5 opacity-60">
                <span className="material-icons-round text-sm text-slate-500">search</span> Verify
              </div>
            </div>
            <div className="p-6 space-y-6 flex-grow overflow-y-auto">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Social Media / AI Content</label>
                <textarea 
                  className="w-full h-40 bg-slate-800/40 border border-slate-700 rounded-xl p-4 text-sm text-slate-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none transition-all" 
                  placeholder="Paste a tweet, FB post, LinkedIn update, or AI chat response..."
                ></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold text-sm shadow-xl flex items-center justify-center gap-2 transform active:scale-95 transition-all">
                <span className="material-icons-round text-lg">check_circle</span> Create Timestamp Proof
              </button>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <h4 className="text-white text-xs font-bold mb-3 uppercase tracking-tighter">Instant Stamping:</h4>
                <ul className="text-xs text-slate-400 space-y-2.5">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    One-click stamp on Social Media.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    Verified on Bitcoin Network.
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    Supports ChatGPT & Claude.ai.
                  </li>
                </ul>
              </div>
            </div>
          </PhoneFrame>

          {/* Manage History */}
          <PhoneFrame title="Social History">
            <div className="flex bg-slate-900 text-slate-400 text-xs uppercase font-bold shrink-0">
              <div className="flex-1 p-4 text-center border-b border-slate-800 opacity-60">Stamp</div>
              <div className="flex-1 p-4 text-center border-b-2 border-primary text-white bg-slate-800/50">History</div>
              <div className="flex-1 p-4 text-center border-b border-slate-800 opacity-60">Verify</div>
            </div>
            <div className="p-4 space-y-4 flex-grow overflow-y-auto">
              <button className="w-full py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-[10px] text-slate-300 font-bold flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors">
                <span className="material-icons-round text-sm">refresh</span> Check for Upgrades
              </button>
              
              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700 relative group transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-blue-600/10 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-blue-500/20 uppercase">X.com</span>
                  <span className="bg-green-600/10 text-green-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-green-500/20">
                    <span className="material-icons-round text-[10px]">check</span> Verified
                  </span>
                </div>
                <p className="text-slate-100 text-xs mb-2 line-clamp-2 leading-relaxed">Stamp: "Incredible breakthrough in quantum computing..."</p>
                <p className="text-slate-500 text-[10px] font-medium">Today • @ElonMusk</p>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-blue-400"><span className="material-icons-round text-sm">download</span></button>
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-slate-400"><span className="material-icons-round text-sm">description</span></button>
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-slate-400"><span className="material-icons-round text-sm">fingerprint</span></button>
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-red-400/50"><span className="material-icons-round text-sm">delete</span></button>
                </div>
              </div>

              <div className="bg-slate-800/80 rounded-2xl p-4 border border-slate-700">
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-teal-600/10 text-teal-400 text-[10px] font-bold px-2 py-0.5 rounded-md border border-teal-500/20 uppercase">ChatGPT</span>
                  <span className="bg-yellow-600/10 text-yellow-400 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-yellow-500/20">
                    <span className="material-icons-round text-[10px]">hourglass_empty</span> Pending
                  </span>
                </div>
                <p className="text-slate-100 text-xs mb-2 line-clamp-2 leading-relaxed">AI: "Based on your prompt, the best architecture would be..."</p>
                <p className="text-slate-500 text-[10px] font-medium">Dec 28, 2025</p>
                <div className="grid grid-cols-4 gap-2 mt-4">
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-blue-400"><span className="material-icons-round text-sm">download</span></button>
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-slate-400"><span className="material-icons-round text-sm">description</span></button>
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-slate-400"><span className="material-icons-round text-sm">fingerprint</span></button>
                  <button className="bg-slate-700/50 rounded-lg py-1.5 flex justify-center items-center text-red-400/50"><span className="material-icons-round text-sm">delete</span></button>
                </div>
              </div>
            </div>
          </PhoneFrame>

          {/* Verify Integrity */}
          <PhoneFrame title="Verify Integrity">
            <div className="flex bg-slate-900 text-slate-400 text-xs uppercase font-bold shrink-0">
              <div className="flex-1 p-4 text-center border-b border-slate-800 opacity-60">Stamp</div>
              <div className="flex-1 p-4 text-center border-b border-slate-800 opacity-60">History</div>
              <div className="flex-1 p-4 text-center border-b-2 border-primary text-white bg-slate-800/50">Verify</div>
            </div>
            <div className="p-6 space-y-6 flex-grow overflow-y-auto">
              <div className="bg-slate-800/60 rounded-xl p-4 text-[11px] text-slate-300 leading-relaxed border border-slate-700/50 shadow-inner">
                <strong>Third-Party Verification:</strong> Confirm that a specific LinkedIn post or Claude.ai response existed at a precise moment in history.
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Original Content</label>
                <textarea 
                  className="w-full h-32 bg-slate-800/40 border border-slate-700 rounded-xl p-4 text-xs text-slate-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none transition-all"
                  placeholder="Paste the original content to verify its timestamp..."
                ></textarea>
              </div>
              <button className="w-full py-4 border border-primary/50 text-primary rounded-xl font-bold text-sm hover:bg-primary/5 transition-colors flex items-center justify-center gap-2">
                <span className="material-icons-round text-lg">upload_file</span> Load .ots Proof
              </button>
              <div className="pt-4 border-t border-slate-800">
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-3">
                  <span className="material-icons-round text-xs">gavel</span> Verification Status
                </div>
                <div className="h-20 flex items-center justify-center border-2 border-dashed border-slate-800 rounded-xl text-slate-600 text-[10px]">
                  No Proof Loaded
                </div>
              </div>
            </div>
          </PhoneFrame>
        </div>
      </div>
    </section>
  );
};

export default AppPreviews;
