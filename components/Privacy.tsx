import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="text-sm text-slate-400">Last updated: February 12, 2026</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">1. Introduction</h2>
        <p className="text-slate-700 leading-relaxed">
          Ratchet (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) is committed to protecting your
          privacy. This Privacy Policy describes how we collect, use, and share information in connection
          with your use of the Ratchet platform. By using the platform, you agree to the collection and
          use of information in accordance with this policy.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">2. Information We Collect</h2>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-800">Information You Provide</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Blockchain wallet address when connecting your wallet.</li>
            <li>Token information you submit (names, symbols, descriptions).</li>
            <li>Communications with us (support inquiries, feedback).</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-800">Information Collected Automatically</h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Device information (type, operating system, browser).</li>
            <li>IP address.</li>
            <li>Log data (access times, pages viewed, referring URLs).</li>
            <li>Usage data (features used, interactions).</li>
            <li>Approximate location based on IP address.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-slate-800">On-Chain Data</h3>
          <p className="text-slate-700 leading-relaxed">
            Publicly available blockchain data including wallet addresses, transaction history, and token
            balances. This information is publicly accessible on the blockchain and is not controlled by us.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">3. How We Use Your Information</h2>
        <p className="text-slate-700 leading-relaxed">
          We use the information we collect for the following purposes:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Providing, maintaining, and improving the platform.</li>
          <li>Screening wallets for compliance and security purposes.</li>
          <li>Communicating with you about the platform.</li>
          <li>Enforcing our Terms &amp; Conditions.</li>
          <li>Complying with legal obligations.</li>
          <li>Fraud detection and prevention.</li>
          <li>Analytics and research to improve user experience.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">4. How We Share Your Information</h2>
        <p className="text-slate-700 leading-relaxed">
          We may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Service providers who assist with platform operations.</li>
          <li>Blockchain analytics providers for compliance screening.</li>
          <li>When required by law, court order, subpoena, or government request.</li>
          <li>In connection with business transfers (mergers, acquisitions).</li>
          <li>Aggregated or anonymized data may be shared without restriction.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          We do not share your data with third parties for marketing purposes.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">5. Cookies and Tracking Technologies</h2>
        <p className="text-slate-700 leading-relaxed">
          We may use cookies, web beacons, and similar technologies to collect information about how you
          interact with our platform.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Essential cookies for platform functionality.</li>
          <li>Analytics cookies to understand usage patterns.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          You can manage cookie preferences through your browser settings.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">6. Blockchain Data</h2>
        <p className="text-slate-700 leading-relaxed">
          Blockchain transactions are permanent and publicly accessible. We cannot edit, modify, or delete
          information stored on a blockchain. Wallet addresses and transaction data on-chain are beyond our
          control. This limits our ability to fulfill certain data deletion requests regarding on-chain
          information.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">7. Data Security</h2>
        <p className="text-slate-700 leading-relaxed">
          We implement reasonable security measures to protect your information. No method of transmission
          over the internet is 100% secure. You are responsible for maintaining the security of your own
          wallet and credentials.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">8. Data Retention</h2>
        <p className="text-slate-700 leading-relaxed">
          We retain information as long as necessary to fulfill the purposes described in this policy. We
          may retain information after you stop using the platform for legal compliance, dispute resolution,
          and fraud prevention.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">9. Your Rights</h2>
        <p className="text-slate-700 leading-relaxed">
          Depending on your jurisdiction, you may have the right to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Access your personal data.</li>
          <li>Correct inaccurate data.</li>
          <li>Request deletion of your data (subject to blockchain limitations).</li>
          <li>Opt out of certain data collection.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed">
          To exercise these rights, contact us at{' '}
          <a href="mailto:privacy@ratchet.trade" className="text-blue-600 hover:underline">
            privacy@ratchet.trade
          </a>
          .
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">10. Children&apos;s Privacy</h2>
        <p className="text-slate-700 leading-relaxed">
          The platform is not intended for users under 18. We do not knowingly collect information from
          children. If we discover we have collected data from a child, we will delete it promptly.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">11. International Data Transfers</h2>
        <p className="text-slate-700 leading-relaxed">
          Your information may be transferred to and processed in countries other than your own. By using
          the platform, you consent to such transfers.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">12. Changes to This Policy</h2>
        <p className="text-slate-700 leading-relaxed">
          We may update this Privacy Policy at any time. Changes are effective upon posting. Continued use
          of the platform constitutes acceptance of the updated policy.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 mt-8">13. Contact Us</h2>
        <p className="text-slate-700 leading-relaxed">
          For questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:privacy@ratchet.trade" className="text-blue-600 hover:underline">
            privacy@ratchet.trade
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Privacy;
