import type { Token } from './types'

export const tokens: Token[] = [
  {
    chainId: 137,
    name: 'USD Coin',
    symbol: 'USDC',
    decimals: 6,
    address: '0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359',
    logoURI:
      'https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdc.svg',
  },
  {
    chainId: 137,
    name: 'Tether USD - PoS',
    symbol: 'USDT',
    decimals: 6,
    address: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
    logoURI:
      'https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/usdt.svg',
  },
  {
    chainId: 137,
    name: 'Wrapped Matic',
    symbol: 'WMATIC',
    decimals: 18,
    address: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
    logoURI:
      'https://raw.githubusercontent.com/Uniswap/assets/master/blockchains/polygon/assets/0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270/logo.png',
  },
  {
    chainId: 137,
    name: 'Dai - PoS',
    symbol: 'DAI',
    decimals: 18,
    address: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
    logoURI:
      'https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/dai.svg',
  },
  {
    chainId: 137,
    name: 'Uniswap',
    symbol: 'UNI',
    decimals: 18,
    address: '0xb33eaad8d922b1083446dc23f610c2567fb5180f',
    logoURI:
      'https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/uni.svg',
  },
  {
    chainId: 137,
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    logoURI:
      'https://raw.githubusercontent.com/maticnetwork/polygon-token-assets/main/assets/tokenAssets/matic.svg',
  },
]

export function getToken(
  token: Pick<Token, 'address' | 'symbol' | 'name'>,
): Token | undefined {
  return tokens.find(
    (t) =>
      (token.address &&
        t.address.toLowerCase() === token.address.toLowerCase()) ||
      (token.symbol && t.symbol === token.symbol) ||
      (token.name && t.name === token.name),
  )
}
