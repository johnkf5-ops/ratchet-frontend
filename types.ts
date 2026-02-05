export enum AppSection {
  HOME = 'home',
  LAUNCH = 'launch',
}

export interface LaunchFormData {
  name: string;
  symbol: string;
  totalSupply: string;
  teamAllocationPct: number;
  reactiveSellRatePct: number;
  creator: string;
  ethAmount: string;
}

export interface LaunchResult {
  token: `0x${string}`;
  vault: `0x${string}`;
  txHash: `0x${string}`;
}
