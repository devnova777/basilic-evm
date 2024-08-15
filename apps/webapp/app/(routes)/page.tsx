import { tokens } from '@repo/project-contracts'
import dynamic from 'next/dynamic'

export default async function IndexPage() {
  return (
    <div className="container max-w-[100vw] !overflow-hidden !px-4">
      {tokens.map((token) => (
        <div key={token.address} className="mb-2">
          <TokenBalance token={token} />
        </div>
      ))}
    </div>
  )
}

// we use dynamic for now since fallback was not working properly
// https://github.com/vercel/next.js/discussions/68924
const TokenBalance = dynamic(
  () =>
    import('@/components/shared/token-balance').then((mod) => mod.TokenBalance),
  {
    ssr: false,
  },
)
