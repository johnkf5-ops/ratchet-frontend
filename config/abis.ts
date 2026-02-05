export const RatchetFactoryABI = [
  {
    type: 'event',
    name: 'TokenLaunched',
    inputs: [
      { name: 'token', type: 'address', indexed: true },
      { name: 'vault', type: 'address', indexed: true },
      { name: 'poolId', type: 'bytes32', indexed: true },
      { name: 'name', type: 'string', indexed: false },
      { name: 'symbol', type: 'string', indexed: false },
      { name: 'creator', type: 'address', indexed: false },
    ],
  },
  {
    type: 'event',
    name: 'CreatorClaimed',
    inputs: [
      { name: 'vault', type: 'address', indexed: true },
      { name: 'newOwner', type: 'address', indexed: true },
      { name: 'creator', type: 'string', indexed: false },
    ],
  },
  {
    type: 'function',
    name: 'launch',
    inputs: [
      {
        name: 'params',
        type: 'tuple',
        components: [
          { name: 'name', type: 'string' },
          { name: 'symbol', type: 'string' },
          { name: 'totalSupply', type: 'uint256' },
          { name: 'teamAllocationBps', type: 'uint256' },
          { name: 'initialReactiveSellRate', type: 'uint256' },
          { name: 'teamFeeShareBps', type: 'uint256' },
          { name: 'initialSqrtPriceX96', type: 'uint160' },
          { name: 'creator', type: 'string' },
        ],
      },
    ],
    outputs: [
      {
        name: 'result',
        type: 'tuple',
        components: [
          { name: 'token', type: 'address' },
          { name: 'vault', type: 'address' },
          { name: 'poolId', type: 'bytes32' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    name: 'verifyClaim',
    inputs: [
      { name: 'vault', type: 'address' },
      { name: 'newOwner', type: 'address' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'launchCount',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'HOOK',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'VERIFIER',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
] as const;

export const RatchetVaultABI = [
  {
    type: 'function',
    name: 'reactiveSellRate',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'creator',
    inputs: [],
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'claimed',
    inputs: [],
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'teamRecipient',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'accumulatedFees',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'TOKEN',
    inputs: [],
    outputs: [{ name: '', type: 'address' }],
    stateMutability: 'view',
  },
] as const;

export const ERC20ABI = [
  {
    type: 'function',
    name: 'name',
    inputs: [],
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'symbol',
    inputs: [],
    outputs: [{ name: '', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'totalSupply',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    name: 'balanceOf',
    inputs: [{ name: 'account', type: 'address' }],
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
  },
] as const;
