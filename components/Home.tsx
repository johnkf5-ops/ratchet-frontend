import React from 'react';

interface HomeProps {
  onLaunch: () => void;
}

const Home: React.FC<HomeProps> = ({ onLaunch }) => {
  return (
    <div className="max-w-3xl mx-auto py-20 space-y-24">
      {/* Hero */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
          Dev gets paid.<br />Dev can't dump.
        </h1>
        <p className="text-xl text-slate-500">A new way to launch tokens.</p>
      </section>

      {/* Problem */}
      <section className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">The Problem</h2>
        <p className="text-2xl text-slate-700 leading-relaxed">
          Someone launches a token for a creator. Dev gets an allocation. Dev dumps. Project dies. Tale as old as time.
        </p>
      </section>

      {/* Solution */}
      <section className="space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">The Solution</h2>
        <p className="text-xl text-slate-700">Ratchet gives devs two ways to earn:</p>
        <div className="space-y-4 pl-4 border-l-2 border-slate-200">
          <div>
            <span className="font-bold text-slate-900">1. Trading fees</span>
            <span className="text-slate-600"> — devs get a cut of every swap, forever</span>
          </div>
          <div>
            <span className="font-bold text-slate-900">2. Reactive selling</span>
            <span className="text-slate-600"> — dev tokens only sell when someone is buying, and the rate can only go DOWN</span>
          </div>
        </div>
        <p className="text-lg text-slate-500 italic">
          No dump button. No rug switch. Just sustainable revenue.
        </p>
      </section>

      {/* Trust Points */}
      <section className="grid md:grid-cols-2 gap-6">
        {[
          'Tokens sell only into active buys',
          'Sell rate can only decrease, never increase',
          'Liquidity locked forever',
          'Fees flow as long as people trade',
        ].map((point, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl">
            <div className="w-6 h-6 bg-slate-900 text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              {i + 1}
            </div>
            <span className="text-slate-700">{point}</span>
          </div>
        ))}
      </section>

      {/* CTA */}
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
