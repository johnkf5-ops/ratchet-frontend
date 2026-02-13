import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import LaunchToken from './components/LaunchToken';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import { AppSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      <main className="flex-1 container mx-auto px-6 max-w-4xl">
        {activeSection === AppSection.HOME && (
          <Home onLaunch={() => setActiveSection(AppSection.LAUNCH)} />
        )}
        {activeSection === AppSection.LAUNCH && <LaunchToken />}
        {activeSection === AppSection.TERMS && <Terms />}
        {activeSection === AppSection.PRIVACY && <Privacy />}
      </main>

      <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-400">
        <p className="mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium">
            Built on Base
          </span>
        </p>
        <p>
          Built by John Knopf &middot;{' '}
          <a
            href="https://github.com/johnkf5-ops/ratchet-protocol"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-slate-700"
          >
            GitHub
          </a>
          {' '}&middot;{' '}
          <button
            onClick={() => setActiveSection(AppSection.TERMS)}
            className="text-slate-500 hover:text-slate-700"
          >
            Terms &amp; Conditions
          </button>
          {' '}&middot;{' '}
          <button
            onClick={() => setActiveSection(AppSection.PRIVACY)}
            className="text-slate-500 hover:text-slate-700"
          >
            Privacy Policy
          </button>
        </p>
      </footer>
    </div>
  );
};

export default App;
