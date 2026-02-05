import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { baseSepolia, base } from 'wagmi/chains';

export const config = getDefaultConfig({
  appName: 'ratchet.app',
  projectId: 'ratchet-app', // Replace with actual WalletConnect project ID for production
  chains: [baseSepolia, base],
  ssr: false,
});

// Contract addresses
export const CONTRACTS = {
  factory: '0xe562B41c0E1B9260AF721dBFC49478A052A8bA64' as `0x${string}`,
  hook: '0x26B818a9BFD19999A4782b471fe43cc18FF84044' as `0x${string}`,
} as const;

// Chain configuration
export const DEFAULT_CHAIN = baseSepolia;
