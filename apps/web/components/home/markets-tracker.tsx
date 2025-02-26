import { getMarketData } from '@/lib/binance/index'
import { MarketsTable } from './markets-table'

export async function MarketsTracker() {
  const marketData = await getMarketData()
  return (
    <div>
      <MarketsTable marketData={marketData} />
    </div>
  )
}
