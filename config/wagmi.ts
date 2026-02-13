import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia, base } from 'wagmi/chains';

const walletConnectProjectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID;
if (!walletConnectProjectId || walletConnectProjectId === 'ratchet-app') {
  console.warn(
    '[ratchet] Missing VITE_WALLETCONNECT_PROJECT_ID env var. ' +
    'Mobile wallet connections will fail. ' +
    'Get a project ID at https://cloud.walletconnect.com'
  );
}

export const config = getDefaultConfig({
  appName: 'ratchet.app',
  projectId: walletConnectProjectId || 'ratchet-app',
  chains: [baseSepolia, base],
  ssr: false,
});

// M-1: Contract addresses from env vars (with testnet fallbacks)
export const CONTRACTS = {
  factory: (import.meta.env.VITE_FACTORY_ADDRESS || '0xe562B41c0E1B9260AF721dBFC49478A052A8bA64') as `0x${string}`,
  hook: (import.meta.env.VITE_HOOK_ADDRESS || '0x26B818a9BFD19999A4782b471fe43cc18FF84044') as `0x${string}`,
} as const;

// Chain configuration
export const DEFAULT_CHAIN = baseSepolia;
