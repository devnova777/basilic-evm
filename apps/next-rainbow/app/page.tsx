import { MarketsTracker } from '@repo/markets'

export const revalidate = 300 // 5 minutes

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <MarketsTracker />
    </div>
  )
}
