import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { AppSection } from '../types';
import { ICONS } from '../constants';

interface HeaderProps {
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => setActiveSection(AppSection.HOME)}
          className="flex items-center gap-2"
        >
          <ICONS.Logo size={28} />
          <span className="font-bold text-lg text-slate-900">ratchet</span>
        </button>

        <div className="flex items-center gap-4">
          {activeSection === AppSection.HOME && (
            <button
              onClick={() => setActiveSection(AppSection.LAUNCH)}
              className="hidden sm:block px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
            >
              Launch
            </button>
          )}
          {activeSection === AppSection.LAUNCH && (
            <button
              onClick={() => setActiveSection(AppSection.HOME)}
              className="text-sm text-slate-500 hover:text-slate-700"
            >
              ← Back
            </button>
          )}
          <ConnectButton
            chainStatus="icon"
            showBalance={false}
            accountStatus="avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
