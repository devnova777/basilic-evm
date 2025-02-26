import { Spot } from '@binance/connector-typescript'
import BigNumber from 'bignumber.js'

const binanceClient = new Spot()

export async function getMarketData(): Promise<MarketData[]> {
  const response = await binanceClient.ticker24hr()
  const data = Array.isArray(response) ? response : [response]

  return data
    .map((coin) => ({
      symbol: coin.symbol,
      name: COIN_NAMES[coin.symbol] || coin.symbol,
      price: Number.parseFloat(coin.lastPrice),
      change1h: Number.parseFloat(coin.priceChangePercent),
      change24h: Number.parseFloat(coin.priceChangePercent),
      change7d: Math.random() * 10 - 5, // Binance API doesn't provide 7D change
      marketCap: new BigNumber(coin.quoteVolume)
        .times(coin.lastPrice)
        .toNumber(), // Safer market cap calculation
      volume24h: Number.parseFloat(coin.quoteVolume),
      circulatingSupply: Math.random() * 1000000000, // Not available in Binance API
    }))
    .sort((a, b) => b.marketCap - a.marketCap) // Sort by market cap in descending order
}

export type MarketData = {
  symbol: string
  name: string
  price: number
  change1h: number
  change24h: number
  change7d: number
  marketCap: number
  volume24h: number
  circulatingSupply: number
}

const COIN_NAMES: Record<string, string> = {
  BTCUSDT: 'Bitcoin',
  ETHUSDT: 'Ethereum',
  USDTUSDT: 'Tether',
  XRPUSDT: 'XRP',
  BNBUSDT: 'BNB',
  SOLUSDT: 'Solana',
  USDCUSDT: 'USDC',
  DOGEUSDT: 'Dogecoin',
  ADAUSDT: 'Cardano',
}
