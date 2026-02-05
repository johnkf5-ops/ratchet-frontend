import React, { useState } from 'react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther, parseUnits, decodeEventLog } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { CONTRACTS } from '../config/wagmi';
import { RatchetFactoryABI } from '../config/abis';
import { LaunchFormData, LaunchResult } from '../types';

const LaunchToken: React.FC = () => {
  const { isConnected } = useAccount();
  const [formData, setFormData] = useState<LaunchFormData>({
    name: '',
    symbol: '',
    totalSupply: '1000000000',
    teamAllocationPct: 10,
    reactiveSellRatePct: 5,
    creator: '',
    ethAmount: '0.01',
  });
  const [result, setResult] = useState<LaunchResult | null>(null);

  const { data: hash, writeContract, isPending, error } = useWriteContract();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
    query: {
      select: (receipt) => {
        // Parse the TokenLaunched event from the receipt
        const event = receipt.logs.find(log => {
          try {
            const decoded = decodeEventLog({
              abi: RatchetFactoryABI,
              data: log.data,
              topics: log.topics,
            });
            return decoded.eventName === 'TokenLaunched';
          } catch {
            return false;
          }
        });

        if (event) {
          const decoded = decodeEventLog({
            abi: RatchetFactoryABI,
            data: event.data,
            topics: event.topics,
          });
          setResult({
            token: decoded.args.token as `0x${string}`,
            vault: decoded.args.vault as `0x${string}`,
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConnected) return;

    // sqrtPriceX96 for initial price: 1 ETH = 1M tokens
    const sqrtPriceX96 = BigInt('79228162514264337593543950336') * BigInt(1000);
    const totalSupplyWei = parseUnits(formData.totalSupply, 18);

    writeContract({
      address: CONTRACTS.factory,
      abi: RatchetFactoryABI,
      functionName: 'launch',
      args: [{
        name: formData.name,
        symbol: formData.symbol.toUpperCase(),
        totalSupply: totalSupplyWei,
        teamAllocationBps: BigInt(formData.teamAllocationPct * 100),
        initialReactiveSellRate: BigInt(formData.reactiveSellRatePct * 100),
        teamFeeShareBps: BigInt(500), // 5% fee share
        initialSqrtPriceX96: sqrtPriceX96,
        creator: formData.creator,
      }],
      value: parseEther(formData.ethAmount),
    });
  };

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
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending || isConfirming}
            className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? 'Confirm in Wallet...' : isConfirming ? 'Launching...' : 'Launch Token'}
          </button>

          {error && (
            <p className="text-red-600 text-sm text-center">
              {error.message.includes('User rejected') ? 'Transaction cancelled' : 'Error: ' + error.message}
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default LaunchToken;
