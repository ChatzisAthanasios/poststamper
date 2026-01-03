import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
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

        <article className="prose prose-slate dark:prose-invert max-w-none">
          <h1 className="text-4xl font-black mb-4 dark:text-white">Privacy Policy</h1>
          <p className="text-slate-500 italic mb-8">Last updated: January 2026</p>
          
          <div className="bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 p-6 rounded-r-2xl mb-12 shadow-sm">
            <strong className="text-green-800 dark:text-green-400 block mb-2 text-lg">Summary:</strong> 
            <p className="m-0 text-green-700 dark:text-green-300">
              PostStamper does NOT collect, store, or transmit your personal data. All your content stays on your device. Only cryptographic hashes (irreversible fingerprints) are sent to timestamp servers.
            </p>
          </div>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">1. What Data We Collect</h2>
            <p><strong>We do NOT collect any personal data.</strong></p>
            <p>The extension processes content locally on your device to create SHA-256 hashes. These hashes are one-way cryptographic fingerprints — they cannot be reversed to reveal your original content.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">2. What Data Is Transmitted</h2>
            <p>When you create a timestamp, only the following is sent to OpenTimestamps calendar servers:</p>
            <ul>
                <li><strong>SHA-256 hash</strong> — a 64-character string that cannot reveal your content</li>
            </ul>
            <p className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
              Example hash: e3b0c44298fc1c149afbf4c8996fb924...
            </p>
            <p>Your actual text, tweets, or content is <strong>NEVER</strong> transmitted to any server.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">3. What Data Is Stored Locally</h2>
            <p>The following data is stored in your browser's local storage (on your device only):</p>
            <ul>
                <li>Your original content (for verification purposes)</li>
                <li>SHA-256 hashes</li>
                <li>Timestamp proof files (.ots)</li>
                <li>Metadata (platform, URL, date)</li>
            </ul>
            <p>This data never leaves your device unless you manually export it.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">4. Third-Party Services</h2>
            <p>The extension communicates with public OpenTimestamps calendar servers:</p>
            <ul className="font-mono text-sm opacity-80">
                <li>alice.btc.calendar.opentimestamps.org</li>
                <li>bob.btc.calendar.opentimestamps.org</li>
                <li>finney.calendar.eternitywall.com</li>
            </ul>
            <p>These servers only receive cryptographic hashes. They cannot identify you or read your content.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Social Media & AI Integration</h2>
            <p>The extension injects buttons on X, Facebook, LinkedIn, ChatGPT, and Claude.ai to allow one-click timestamping. It reads content only when you click the Stamp or Witness button. This content is:</p>
            <ul>
                <li>Hashed locally on your device</li>
                <li>Stored locally in your browser</li>
                <li>Never sent to any server (only the hash is transmitted)</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Cookies & Tracking</h2>
            <p>This extension does NOT use:</p>
            <ul>
                <li>Cookies</li>
                <li>Analytics</li>
                <li>Tracking pixels</li>
                <li>Any form of user tracking</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Data Retention</h2>
            <p>All data is stored locally in your browser. You can delete it anytime by:</p>
            <ul>
                <li>Deleting individual stamps in the extension</li>
                <li>Clearing browser data</li>
                <li>Uninstalling the extension</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">8. Children's Privacy</h2>
            <p>This extension does not knowingly collect any data from children under 13.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">9. Changes to This Policy</h2>
            <p>If we update this policy, we will post the new version here with an updated date.</p>
          </section>

          <section className="bg-slate-100 dark:bg-slate-800 p-8 rounded-3xl mt-12 border border-slate-200 dark:border-slate-700">
            <h2 className="text-2xl font-bold mb-4 dark:text-white mt-0">10. Contact</h2>
            <p className="mb-2">For privacy questions or concerns, contact:</p>
            <div className="font-bold text-slate-900 dark:text-white">
              <p className="m-0">Chatzis Athanasios</p>
              <p className="m-0 text-primary hover:underline cursor-pointer">chatzis.ath@hotmail.com</p>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Privacy;