import { onchainTable } from 'ponder'

export const Asset = onchainTable('Asset', (t) => ({
  id: t.text().primaryKey(), // address-chainId composite
  name: t.text(),
  symbol: t.text(),
  decimals: t.integer(),
  chainId: t.text(), // Stored as string to support various chain formats (e.g. "ethereum", "1", etc)
  address: t.text(),
  isStable: t.boolean(),
  isNFT: t.boolean(),
}))

export const SwapEvent = onchainTable('SwapEvent', (t) => ({
  id: t.text().primaryKey(), // Composite key of chainId and poolAddress
  chainId: t.text(),
  poolAddress: t.text(),
  token0Address: t.text(),
  token1Address: t.text(),
  amount0: t.bigint(),
  amount1: t.bigint(),
  sqrtPriceX96: t.bigint(),
  volume: t.text(),
  price: t.text(),
  timestamp: t.integer(),
  blockNumber: t.integer(),
}))

export const User = onchainTable('User', (t) => ({
  address: t.text().primaryKey(),
  ensName: t.text(),
  createdAt: t.integer(),
  updatedAt: t.integer(),
}))
