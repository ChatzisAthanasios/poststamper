import React, { useEffect } from 'react';

const Terms: React.FC = () => {
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
          <h1 className="text-4xl font-black mb-4 dark:text-white">Terms of Use</h1>
          <p className="text-slate-500 italic mb-8">Effective Date: January 2026</p>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
            <p>By installing and using the PostStamper browser extension, you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the service.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">2. Description of Service</h2>
            <p>PostStamper provides tools to create cryptographic hashes of digital content and anchor them to the Bitcoin blockchain via the OpenTimestamps protocol. The service is provided "as is" and intended for informational and verification purposes.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">3. No Guarantee of Permanence</h2>
            <p>While Bitcoin is a highly secure network, PostStamper relies on public OpenTimestamps calendar servers. We do not guarantee the perpetual availability of these third-party servers, although the proofs generated (.ots files) can be verified independently once anchored.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">4. User Responsibility</h2>
            <p>You are solely responsible for the content you choose to stamp. PostStamper does not verify the truthfulness of the content being stamped, only that a specific set of data existed at a specific time.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">5. Intellectual Property</h2>
            <p>PostStamper is an open-source inspired tool. The name "PostStamper" and associated logos are property of Chatzis Athanasios. You may use the extension for personal or commercial use in accordance with its intended purpose.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">6. Limitation of Liability</h2>
            <p>In no event shall PostStamper or its creator be liable for any direct, indirect, incidental, or consequential damages arising out of the use or inability to use the service.</p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to Terms</h2>
            <p>We reserve the right to modify these terms at any time. Your continued use of the extension following any changes constitutes your acceptance of the new terms.</p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terms;