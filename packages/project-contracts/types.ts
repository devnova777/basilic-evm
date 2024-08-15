import type { Address } from 'viem'

export interface Token {
  name: string
  address: Address
  symbol: string
  decimals: number
  chainId: number
  logoURI: string
}
