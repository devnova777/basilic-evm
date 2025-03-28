import { unstable_cache } from 'next/cache'
import { MarketsTable } from './markets-table'

export async function MarketsTracker() {
  const marketData = await getCachedMarketData()
  return (
    <div>
      <MarketsTable marketData={marketData} />
    </div>
  )
}

// Cache the market data fetching
const getCachedMarketData = unstable_cache(
  async () => {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD',
      {
        headers: {
          'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API_KEY || '',
        },
      },
    )

    if (!response.ok) {
      throw new Error('Failed to fetch market data')
    }

    const data = (await response.json()) as CoinMarketCapResponse

    return data.data.map((coin) => ({
      symbol: coin.symbol,
      name: coin.name,
      price: coin.quote.USD.price,
      change1h: coin.quote.USD.percent_change_1h,
      change24h: coin.quote.USD.percent_change_24h,
      change7d: coin.quote.USD.percent_change_7d,
      marketCap: coin.quote.USD.market_cap,
      volume24h: coin.quote.USD.volume_24h,
      circulatingSupply: coin.circulating_supply,
    }))
  },
  ['market-data'],
  {
    revalidate: 300, // 5 minutes
    tags: ['market-data'],
  },
)

export type MarketData = {
  symbol: string
  name: string
  price: number
  change1h: number
  change24h: number
  change7d: number
  volume24h: number
  marketCap: number
  circulatingSupply: number
}

interface CoinMarketCapResponse {
  data: Array<{
    symbol: string
    name: string
    circulating_supply: number
    quote: {
      USD: {
        price: number
        percent_change_1h: number
        percent_change_24h: number
        percent_change_7d: number
        market_cap: number
        volume_24h: number
      }
    }
  }>
}
