import React, { useState } from 'react';
import { useAccount, useChainId, useSwitchChain, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, parseUnits, decodeEventLog } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CONTRACTS, DEFAULT_CHAIN } from '../config/wagmi';
import { RatchetFactoryABI } from '../config/abis';
import { LaunchFormData, LaunchResult } from '../types';

const MIN_ETH = 0.001;
const TEAM_FEE_SHARE_BPS = 500; // 5% — locked at launch, cannot be changed

function formatError(error: Error): string {
  const msg = error.message;
  if (msg.includes('User rejected') || msg.includes('User denied')) return 'Transaction cancelled';
  if (msg.includes('InsufficientETH')) return `Minimum ${MIN_ETH} ETH required for initial liquidity`;
  if (msg.includes('TeamAllocationTooHigh')) return 'Team allocation cannot exceed 20%';
  if (msg.includes('ReactiveSellRateTooHigh')) return 'Reactive sell rate cannot exceed 10%';
  if (msg.includes('TeamFeeShareTooHigh')) return 'Team fee share cannot exceed 50%';
  if (msg.includes('ZeroTotalSupply')) return 'Total supply must be greater than 0';
  if (msg.includes('TotalSupplyTooHigh')) return 'Total supply exceeds maximum allowed';
  if (msg.includes('insufficient funds')) return 'Insufficient ETH balance in your wallet';
  return 'Transaction failed. Please try again.';
}

const LaunchToken: React.FC = () => {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const { switchChain } = useSwitchChain();
  const [formData, setFormData] = useState<LaunchFormData>({
    name: '',
    symbol: '',
    totalSupply: '1000000000',
    teamAllocationPct: 10,
    reactiveSellRatePct: 5,
    creator: '',
    ethAmount: '0.01',
  });
  const [validationError, setValidationError] = useState<string | null>(null);
  const [result, setResult] = useState<LaunchResult | null>(null);

  const { data: hash, writeContract, isPending, error, reset: resetTx } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
    query: {
      select: (receipt) => {
        // Parse the TokenLaunched event from the receipt
        const event = receipt.logs.find(log => {
          try {
            decodeEventLog({
              abi: RatchetFactoryABI,
              eventName: 'TokenLaunched',
              data: log.data,
              topics: log.topics as [signature: `0x${string}`, ...args: `0x${string}`[]],
            });
            return true;
          } catch {
            return false;
          }
        });

        if (event) {
          const decoded = decodeEventLog({
            abi: RatchetFactoryABI,
            eventName: 'TokenLaunched',
            data: event.data,
            topics: event.topics as [signature: `0x${string}`, ...args: `0x${string}`[]],
          });
          setResult({
            token: decoded.args.token,
            vault: decoded.args.vault,
            txHash: receipt.transactionHash,
          });
        }

        return receipt;
      },
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setValidationError(null);
  };

  const validate = (): string | null => {
    const supply = Number(formData.totalSupply);
    if (!formData.totalSupply || isNaN(supply) || supply <= 0) {
      return 'Total supply must be a positive number';
    }
    if (!Number.isFinite(supply)) {
      return 'Total supply is too large';
    }

    const eth = Number(formData.ethAmount);
    if (!formData.ethAmount || isNaN(eth) || eth <= 0) {
      return 'ETH amount must be a positive number';
    }
    if (eth < MIN_ETH) {
      return `Minimum ${MIN_ETH} ETH required for initial liquidity`;
    }

    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;

    const err = validate();
    if (err) {
      setValidationError(err);
      return;
    }
    setValidationError(null);

    // TODO: sqrtPriceX96 assumes token address > WETH address (token is currency1).
    // If the deployed token address < WETH, the price direction flips and the pool
    // will be mispriced. The factory contract should normalize this based on
    // _sortCurrencies ordering. Until then, this works for most deployments since
    // CREATE-deployed token addresses are usually > WETH on Base.
    const sqrtPriceX96 = BigInt('79228162514264337593543950336') * BigInt(1000);
    const totalSupplyWei = parseUnits(formData.totalSupply, 18);

    writeContract({
      account: address,
      chain: DEFAULT_CHAIN,
      address: CONTRACTS.factory,
      abi: RatchetFactoryABI,
      functionName: 'launch',
      args: [{
        name: formData.name,
        symbol: formData.symbol.toUpperCase(),
        totalSupply: totalSupplyWei,
        teamAllocationBps: BigInt(formData.teamAllocationPct * 100),
        initialReactiveSellRate: BigInt(formData.reactiveSellRatePct * 100),
        teamFeeShareBps: BigInt(TEAM_FEE_SHARE_BPS),
        initialSqrtPriceX96: sqrtPriceX96,
        creator: formData.creator,
      }],
      value: parseEther(formData.ethAmount),
    });
  };

  const handleReset = () => {
    setResult(null);
    setValidationError(null);
    resetTx();
    setFormData({
      name: '',
      symbol: '',
      totalSupply: '1000000000',
      teamAllocationPct: 10,
      reactiveSellRatePct: 5,
      creator: '',
      ethAmount: '0.01',
    });
  };

  const isWrongChain = isConnected && chainId !== DEFAULT_CHAIN.id;

  // Success state
  if (isSuccess && result) {
    return (
      <div className="max-w-lg mx-auto py-20 space-y-8">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Token Launched!</h1>
        </div>

        <div className="space-y-4 p-6 bg-slate-50 rounded-2xl">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-400">Token Address</label>
            <p className="font-mono text-sm text-slate-900 break-all">{result.token}</p>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase text-slate-400">Vault Address</label>
            <p className="font-mono text-sm text-slate-900 break-all">{result.vault}</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <a
            href={`https://sepolia.basescan.org/address/${result.token}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            View Token on BaseScan
          </a>
          <a
            href={`https://sepolia.basescan.org/address/${result.vault}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 bg-slate-100 text-slate-900 rounded-xl font-medium hover:bg-slate-200 transition-colors"
          >
            View Vault on BaseScan
          </a>
          <a
            href={`https://sepolia.basescan.org/tx/${result.txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center py-3 px-6 text-slate-500 hover:text-slate-700 transition-colors text-sm"
          >
            View Transaction
          </a>
          <button
            onClick={handleReset}
            className="py-3 px-6 border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Launch Another Token
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto py-20 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Launch Token</h1>
        <p className="text-slate-500">Deploy on Base Sepolia</p>
      </div>

      {!isConnected ? (
        <div className="text-center space-y-4 py-8">
          <p className="text-slate-500">Connect your wallet to continue</p>
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </div>
      ) : isWrongChain ? (
        <div className="text-center space-y-4 py-8">
          <p className="text-amber-600 font-medium">Wrong network — please switch to {DEFAULT_CHAIN.name}</p>
          <button
            onClick={() => switchChain({ chainId: DEFAULT_CHAIN.id })}
            className="px-6 py-3 bg-slate-900 text-white rounded-xl font-medium hover:bg-slate-800 transition-colors"
          >
            Switch to {DEFAULT_CHAIN.name}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Token Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="My Token"
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Symbol</label>
                <input
                  type="text"
                  name="symbol"
                  value={formData.symbol}
                  onChange={handleInputChange}
                  placeholder="MTK"
                  required
                  maxLength={10}
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900 uppercase"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Total Supply</label>
              <input
                type="text"
                name="totalSupply"
                value={formData.totalSupply}
                onChange={handleInputChange}
                placeholder="1000000000"
                required
                inputMode="numeric"
                pattern="[0-9]*\.?[0-9]*"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-700">Team Allocation</label>
                <span className="text-sm font-bold text-slate-900">{formData.teamAllocationPct}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="20"
                value={formData.teamAllocationPct}
                onChange={(e) => setFormData(prev => ({ ...prev, teamAllocationPct: Number(e.target.value) }))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-slate-700">Reactive Sell Rate</label>
                <span className="text-sm font-bold text-slate-900">{formData.reactiveSellRatePct}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="10"
                value={formData.reactiveSellRatePct}
                onChange={(e) => setFormData(prev => ({ ...prev, reactiveSellRatePct: Number(e.target.value) }))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
              />
              <p className="text-xs text-slate-400">Can only decrease after launch</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Creator (optional)</label>
              <input
                type="text"
                name="creator"
                value={formData.creator}
                onChange={handleInputChange}
                placeholder="twitter:@jack"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <p className="text-xs text-slate-400">Leave empty to claim ownership immediately</p>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">ETH for Liquidity</label>
              <input
                type="text"
                name="ethAmount"
                value={formData.ethAmount}
                onChange={handleInputChange}
                placeholder="0.01"
                required
                inputMode="decimal"
                pattern="[0-9]*\.?[0-9]*"
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <p className="text-xs text-slate-400">Minimum {MIN_ETH} ETH required</p>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-xl text-sm text-slate-500 space-y-1">
            <p>Team fee share: <span className="font-medium text-slate-700">{TEAM_FEE_SHARE_BPS / 100}%</span> of swap fees go to team</p>
            <p className="text-xs">This is locked at launch and cannot be changed.</p>
          </div>

          <button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Confirm in Wallet...' : isConfirming ? 'Launching...' : 'Launch Token'}
          </button>

          {validationError && (
            <p className="text-red-600 text-sm text-center">{validationError}</p>
          )}

          {error && (
            <p className="text-red-600 text-sm text-center">{formatError(error)}</p>
          )}
        </form>
      )}
    </div>
  );
};

export default LaunchToken;
