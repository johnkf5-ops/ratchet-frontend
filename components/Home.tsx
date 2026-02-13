import React from 'react';

interface HomeProps {
  onLaunch: () => void;
}

const Home: React.FC<HomeProps> = ({ onLaunch }) => {
  return (
    <div className="max-w-3xl mx-auto py-20 space-y-24">
      {/* TOP Section — Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
          Dev gets paid. Dev can't dump.
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed">
          A new way to launch tokens on Base.
        </p>
        <p className="text-xl text-slate-600 leading-relaxed">
          No dump button. No rug switch. Just sustainable revenue.
        </p>
        <div className="pt-4">
          <button
            onClick={onLaunch}
            className="bg-slate-900 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-colors"
          >
            Launch a Token
          </button>
        </div>
      </section>

      {/* MIDDLE Section — How It Works */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-slate-900">Here's how it works:</h2>
        <p className="text-lg text-slate-700 leading-relaxed">
          Ratchet is a unique smart contract system that automatically creates dual liquidity pools on launch. One is the market pool, which holds the majority share of pooled tokens. The other is a rule-based pool for team allocation.
        </p>
        <p className="text-lg text-slate-700 leading-relaxed">
          It's simple: on each market buy, the purchased tokens come from both pools. The split is preset, with the majority coming from the market pool and can never exceed 20% from the team pool. The only lever the creator or developer has after launch is to reduce the percentage the team pool sells; it can never be increased.
        </p>

        {/* Diagram */}
        <div className="flex justify-center py-4">
          <img
            src="/ratchet-diagram.png"
            alt="Ratchet dual pool system diagram — showing how buy orders split between Market Pool (80%+) and Team Pool (≤20%), with trading fees and reactive sells flowing to the Creator/Dev wallet"
            className="max-w-full rounded-xl border border-slate-200 shadow-sm"
          />
        </div>
      </section>

      {/* BOTTOM Section — Earn */}
      <section className="space-y-8">
        <div className="space-y-6">
          <p className="text-xl text-slate-700 font-medium">
            Ratchet gives developers and creators two ways to earn:
          </p>
          <div className="space-y-4 pl-4 border-l-2 border-slate-200">
            <div>
              <span className="font-bold text-slate-900">1. Trading fees</span>
              <span className="text-slate-600"> — get a cut of every swap, forever.</span>
            </div>
            <div>
              <span className="font-bold text-slate-900">2. Reactive selling</span>
              <span className="text-slate-600"> — tokens from the team pool only sell when someone is buying, and the rate can only go down.</span>
            </div>
          </div>
        </div>

        <p className="text-lg text-slate-500 italic">
          No dump button. No rug switch. Just sustainable revenue.
        </p>

        {/* Trust Points */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            'Tokens sell only into active buys.',
            'Sell rate can only decrease, never increase.',
            'Liquidity locked forever.',
            'Fees flow as long as people trade.',
          ].map((point, i) => (
            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
              <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                {i + 1}
              </div>
              <span className="text-slate-700">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-center">
        <button
          onClick={onLaunch}
          className="bg-slate-900 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-slate-800 transition-colors"
        >
          Launch a Token
        </button>
      </section>
    </div>
  );
};

export default Home;
