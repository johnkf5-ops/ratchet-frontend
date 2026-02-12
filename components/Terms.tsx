import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto py-20 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-slate-900">Terms &amp; Conditions</h1>
        <p className="text-sm text-slate-400 mt-2">Last updated: February 12, 2026</p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">1. Agreement to Terms</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          By accessing, browsing, or otherwise using the Ratchet platform, website, interface,
          or any associated services (collectively, the &ldquo;Platform&rdquo;), you acknowledge
          that you have read, understood, and agree to be bound by these Terms &amp; Conditions
          (the &ldquo;Terms&rdquo;). If you do not agree to these Terms, you must immediately
          cease all use of the Platform.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          These Terms incorporate by reference our Privacy Policy, which describes how we
          collect, use, and share information about you when you use the Platform. By agreeing
          to these Terms, you also agree to the terms of the Privacy Policy.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">2. Eligibility</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          By using the Platform, you represent and warrant that:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
          <li>
            You are at least 18 years of age or the age of legal majority in your jurisdiction,
            whichever is greater.
          </li>
          <li>
            You have the full legal capacity, right, and authority to enter into a binding
            agreement and to use the Platform in accordance with these Terms.
          </li>
          <li>
            You are not a Restricted Person, meaning you are not the subject of economic
            sanctions, export controls, or other restrictive measures administered or enforced
            by the United States (including the Office of Foreign Assets Control, or
            &ldquo;OFAC&rdquo;), the European Union, the United Kingdom, the United Nations
            Security Council, or any other applicable governmental authority.
          </li>
          <li>
            You are not located in, organized in, or a resident of any jurisdiction that is
            subject to comprehensive sanctions, including but not limited to Cuba, Iran, North
            Korea, Syria, Myanmar, or the Crimea region of Ukraine (collectively,
            &ldquo;Blocked Jurisdictions&rdquo;).
          </li>
          <li>
            You will not use a virtual private network (&ldquo;VPN&rdquo;), proxy service, or
            any other means to circumvent geographic restrictions or misrepresent your location
            in order to access the Platform from a Blocked Jurisdiction or otherwise evade
            eligibility requirements.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">3. Description of Services</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet provides a web-based interface that enables users to interact with
          decentralized smart contracts deployed on public blockchain networks. The Platform
          facilitates the launching of tokens with dual liquidity pool mechanics, allowing
          creators to configure and deploy token contracts through an accessible interface.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet does not custody, control, or execute transactions on behalf of users. All
          transactions are initiated by users directly through their connected wallets and are
          executed on the underlying blockchain network. Smart contract execution is governed
          solely by the immutable code deployed on the blockchain, and Ratchet has no ability
          to modify, reverse, or intervene in any transaction once it has been submitted to the
          network.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">4. Non-Custodial Nature</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          The Platform is entirely non-custodial. To use the Platform, you must connect your
          own non-custodial wallet (such as a browser extension wallet or hardware wallet).
          Ratchet does not at any time hold, custody, or exercise control over any user funds,
          digital assets, private keys, or seed phrases.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          You are solely responsible for the security and management of your wallet, including
          safeguarding your private keys and seed phrases. Ratchet cannot recover lost or
          stolen funds, reset passwords, or reverse transactions. Any loss of access to your
          wallet or compromise of your private keys is your sole responsibility.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">5. Not a Financial Service Provider</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet is NOT a broker, dealer, exchange, investment adviser, custodian, money
          transmitter, or financial service provider of any kind. Ratchet is not registered
          with the U.S. Securities and Exchange Commission (&ldquo;SEC&rdquo;), the Commodity
          Futures Trading Commission (&ldquo;CFTC&rdquo;), the Financial Industry Regulatory
          Authority (&ldquo;FINRA&rdquo;), or any other federal, state, or international
          securities or financial regulatory authority.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          No fiduciary relationship is created between Ratchet and any user by virtue of
          accessing or using the Platform. Ratchet owes no fiduciary duties to any user.
          Nothing on the Platform constitutes financial advice, investment advice, trading
          advice, legal advice, or any other form of professional advice. You should consult
          your own legal, financial, tax, and other professional advisors before engaging in
          any activity on the Platform.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">6. Prohibited Activities</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          You agree that you will not use the Platform to engage in any of the following
          prohibited activities:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
          <li>
            Violating any applicable federal, state, local, or international law, statute,
            regulation, or ordinance, including but not limited to securities laws, commodities
            laws, anti-money laundering laws, and counter-terrorism financing laws.
          </li>
          <li>
            Infringing upon or misappropriating the intellectual property rights, proprietary
            rights, privacy rights, or any other rights of any third party.
          </li>
          <li>
            Engaging in market manipulation, wash trading, front-running, spoofing, layering,
            or any other form of deceptive or manipulative trading activity.
          </li>
          <li>
            Creating, launching, or promoting tokens that constitute unregistered securities
            under applicable law, or that are designed to defraud or mislead purchasers.
          </li>
          <li>
            Deploying malicious code, viruses, trojans, worms, logic bombs, or any other
            harmful or disruptive software through the Platform or any associated smart
            contracts.
          </li>
          <li>
            Interfering with, disrupting, or attempting to compromise the security, integrity,
            or availability of the Platform, its infrastructure, or any connected blockchain
            network.
          </li>
          <li>
            Reverse engineering, decompiling, disassembling, or otherwise attempting to derive
            the source code or underlying algorithms of the Platform, except to the extent
            expressly permitted by applicable law.
          </li>
          <li>
            Using the Platform for money laundering, terrorist financing, sanctions evasion,
            or any other illicit financial activity.
          </li>
          <li>
            Impersonating any person or entity, or falsely representing your affiliation with
            any person or entity.
          </li>
          <li>
            Engaging in fraud, deception, or any activity intended to mislead or harm other
            users of the Platform.
          </li>
          <li>
            Circumventing, disabling, or otherwise interfering with any access restrictions,
            geographic limitations, or security features of the Platform.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">7. Token Launch Responsibilities</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          If you use the Platform to create, launch, or deploy a token, you are solely and
          entirely responsible for that token and all activities associated with it. This
          includes, without limitation, ensuring full compliance with all applicable laws,
          regulations, and rules in every jurisdiction in which the token is offered, sold,
          distributed, or otherwise made available.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet makes no representation, warranty, or guarantee of any kind regarding any
          token launched through the Platform, including but not limited to its legality,
          value, performance, security, or fitness for any particular purpose. Ratchet does
          not endorse, verify, audit, or guarantee any token, token creator, project, or any
          claims made in connection with any token launch.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          You bear sole responsibility for all tax reporting obligations and compliance with
          tax laws in connection with any tokens you create, buy, sell, or otherwise transact
          with through the Platform. Ratchet does not provide tax advice and does not report
          to any tax authority on your behalf.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">8. Assumption of Risk</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          By using the Platform, you expressly acknowledge, understand, and assume the
          following risks:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
          <li>
            Virtual currencies, digital assets, and blockchain technology are inherently risky,
            experimental, and subject to significant uncertainty. The technology underlying the
            Platform is novel and largely untested at scale.
          </li>
          <li>
            The prices of virtual currencies and digital assets are extremely volatile and may
            fluctuate dramatically in short periods. You may experience substantial or total
            loss of the value of any digital assets you hold or transact with.
          </li>
          <li>
            Smart contracts may contain bugs, vulnerabilities, or exploits that could result in
            the partial or total loss of digital assets. There is no guarantee that any smart
            contract will function as intended.
          </li>
          <li>
            The Platform and associated blockchain networks are subject to cyber-attacks,
            hacking, phishing, social engineering, and other security threats that may result
            in the theft or loss of digital assets.
          </li>
          <li>
            The regulatory landscape for virtual currencies and blockchain technology is
            rapidly evolving and uncertain. New laws, regulations, or enforcement actions could
            materially and adversely affect the Platform or your ability to use it.
          </li>
          <li>
            The technology underlying the Platform is experimental and novel. There is no
            guarantee of continued operation, uptime, or availability.
          </li>
          <li>
            Ratchet has no control over blockchain networks, transaction processing, mining or
            validation, gas fees, network congestion, or transaction finality. Transactions may
            fail, be delayed, or be processed in an unexpected manner.
          </li>
          <li>
            Blockchain transactions are irreversible. Once a transaction has been submitted to
            and confirmed on the blockchain, it cannot be cancelled, reversed, or modified by
            Ratchet or any other party.
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">9. Intellectual Property</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet and its licensors retain all right, title, and interest in and to the
          Platform, including but not limited to the user interface, design, layout, code,
          software, algorithms, text, graphics, images, logos, trademarks, service marks, trade
          names, and all other content and branding associated with the Platform (collectively,
          the &ldquo;Ratchet IP&rdquo;). The Ratchet IP is protected by copyright, trademark,
          patent, trade secret, and other intellectual property laws.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Subject to your compliance with these Terms, Ratchet grants you a limited,
          non-exclusive, non-transferable, non-sublicensable, and revocable license to access
          and use the Platform solely for its intended purposes. This license does not convey
          any ownership interest in the Platform or any Ratchet IP, and may be revoked at any
          time at Ratchet&rsquo;s sole discretion.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">10. Third-Party Services</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          The Platform may integrate with, link to, or otherwise interact with third-party
          services, including but not limited to cryptocurrency wallets, decentralized
          exchanges (&ldquo;DEXes&rdquo;), block explorers, price oracles, analytics
          providers, and other decentralized protocols (collectively, &ldquo;Third-Party
          Services&rdquo;).
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet does not own, control, operate, or endorse any Third-Party Services. Ratchet
          makes no warranty, representation, or guarantee regarding the accuracy, reliability,
          security, availability, or suitability of any Third-Party Services. Your use of any
          Third-Party Services is entirely at your own risk and subject to the terms and
          conditions of those services. Ratchet shall not be liable for any loss or damage
          arising from your use of or reliance on any Third-Party Services.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">11. Disclaimer of Warranties</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          THE PLATFORM AND ALL ASSOCIATED SERVICES, CONTENT, AND FUNCTIONALITY ARE PROVIDED ON
          AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS, WITHOUT WARRANTIES OF
          ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
          LAW, RATCHET EXPRESSLY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY,
          OR OTHERWISE, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet does not warrant that the Platform will be uninterrupted, error-free, secure,
          or free from viruses or other harmful components. Ratchet does not warrant that any
          information provided on or through the Platform is accurate, complete, reliable, or
          current. Ratchet does not warrant that the results obtained from the use of the
          Platform will meet your requirements or expectations.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">12. Limitation of Liability</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL RATCHET, ITS
          AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AGENTS, LICENSORS, OR
          SERVICE PROVIDERS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
          EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF
          PROFITS, REVENUE, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR
          RELATING TO YOUR ACCESS TO OR USE OF (OR INABILITY TO ACCESS OR USE) THE PLATFORM,
          WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STATUTE, OR ANY
          OTHER LEGAL THEORY, AND WHETHER OR NOT RATCHET HAS BEEN ADVISED OF THE POSSIBILITY
          OF SUCH DAMAGES.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          IN NO EVENT SHALL RATCHET&rsquo;S AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS ARISING
          OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM EXCEED THE GREATER OF
          (A) THE TOTAL AMOUNT YOU HAVE PAID TO RATCHET FOR USE OF THE PLATFORM DURING THE
          TWELVE (12) MONTHS IMMEDIATELY PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B)
          ONE HUNDRED U.S. DOLLARS ($100 USD).
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">13. Indemnification</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          You agree to defend, indemnify, and hold harmless Ratchet and its officers,
          directors, employees, contractors, agents, affiliates, successors, and assigns
          (collectively, the &ldquo;Ratchet Parties&rdquo;) from and against any and all
          claims, demands, actions, damages, losses, liabilities, costs, and expenses
          (including reasonable attorneys&rsquo; fees and court costs) arising out of or
          relating to:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
          <li>Your access to or use of the Platform.</li>
          <li>Your violation of these Terms or any representation or warranty contained herein.</li>
          <li>Your violation of any rights of any third party, including intellectual property rights, privacy rights, or proprietary rights.</li>
          <li>Your violation of any applicable law, statute, regulation, or ordinance.</li>
          <li>Any tokens you create, launch, promote, or distribute through the Platform.</li>
          <li>Any dispute between you and any other user of the Platform or any third party.</li>
        </ul>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet reserves the right, at your expense, to assume the exclusive defense and
          control of any matter for which you are required to indemnify the Ratchet Parties,
          and you agree to cooperate with Ratchet&rsquo;s defense of such claims.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">14. Dispute Resolution</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR
          RIGHT TO FILE A LAWSUIT IN COURT AND TO HAVE A JURY TRIAL.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          <strong>Mandatory Binding Arbitration.</strong> Any dispute, controversy, or claim
          arising out of or relating to these Terms, the Platform, or your use thereof,
          including any question regarding the existence, validity, or termination of these
          Terms, shall be resolved exclusively through final and binding arbitration, rather
          than in court. The arbitration shall be administered by a recognized arbitration
          organization in accordance with its rules and procedures then in effect.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          <strong>Class Action Waiver.</strong> YOU AGREE THAT ANY ARBITRATION OR PROCEEDING
          SHALL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR
          REPRESENTATIVE ACTION. YOU EXPRESSLY WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS
          ACTION LAWSUIT OR CLASS-WIDE ARBITRATION.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          <strong>Jury Trial Waiver.</strong> TO THE FULLEST EXTENT PERMITTED BY APPLICABLE
          LAW, YOU AND RATCHET EACH WAIVE THE RIGHT TO A TRIAL BY JURY IN ANY LEGAL PROCEEDING
          ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR USE OF THE PLATFORM.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          <strong>30-Day Notice Requirement.</strong> Before initiating any arbitration
          proceeding, the complaining party must first send a written notice of the dispute to
          the other party at least thirty (30) days in advance. The notice must describe the
          nature and basis of the claim and the specific relief sought. The parties shall
          attempt in good faith to resolve the dispute during this 30-day period before
          resorting to arbitration.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          <strong>Small Claims Court Exception.</strong> Notwithstanding the foregoing, either
          party may bring an individual action in small claims court for disputes and actions
          within the jurisdiction and scope of such court.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">15. Governing Law</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          These Terms and any dispute or claim arising out of or relating to these Terms, their
          subject matter, or their formation (including non-contractual disputes or claims)
          shall be governed by and construed in accordance with the laws of the State of New
          York, United States of America, without regard to its conflict of laws principles.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">16. Modification of Terms</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet reserves the right, in its sole discretion, to modify, amend, or update
          these Terms at any time. If we make material changes to these Terms, we will update
          the &ldquo;Last updated&rdquo; date at the top of this page and may, at our
          discretion, provide additional notice through the Platform.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Your continued access to or use of the Platform after the posting of any changes
          constitutes your acceptance of the modified Terms. If you do not agree with the
          modified Terms, you must immediately cease all use of the Platform. It is your
          responsibility to review these Terms periodically for changes.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">17. Termination</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          Ratchet may, in its sole discretion and without prior notice or liability, terminate
          or suspend your access to all or any part of the Platform at any time and for any
          reason, including but not limited to a breach of these Terms.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          Your right to use the Platform will automatically terminate upon any violation of
          these Terms. Upon termination, your license to use the Platform will immediately
          cease, and you must discontinue all use of the Platform.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          The following sections shall survive any termination of these Terms: Assumption of
          Risk, Intellectual Property, Disclaimer of Warranties, Limitation of Liability,
          Indemnification, Dispute Resolution, Governing Law, and any other provision that by
          its nature should survive termination.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">18. Severability</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          If any provision of these Terms is found by a court of competent jurisdiction or
          arbitrator to be invalid, illegal, or unenforceable for any reason, such provision
          shall be modified to the minimum extent necessary to make it valid, legal, and
          enforceable, or if modification is not possible, shall be severed from these Terms.
          The invalidity, illegality, or unenforceability of any provision shall not affect the
          validity, legality, or enforceability of the remaining provisions, which shall
          continue in full force and effect.
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          These Terms, together with the Privacy Policy and any other agreements expressly
          incorporated by reference herein, constitute the entire agreement between you and
          Ratchet with respect to the subject matter hereof and supersede all prior or
          contemporaneous communications, agreements, and understandings, whether written or
          oral, relating to such subject matter.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-bold text-slate-900 mt-8">19. Contact</h2>
        <p className="text-slate-700 leading-relaxed mt-4">
          If you have any questions, concerns, or inquiries about these Terms, please contact
          us at:
        </p>
        <p className="text-slate-700 leading-relaxed mt-4">
          <a
            href="mailto:legal@ratchet.trade"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            legal@ratchet.trade
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
