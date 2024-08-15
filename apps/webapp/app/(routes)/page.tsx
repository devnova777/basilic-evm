import { getTokensData } from '@/app/actions/codex/get-tokens-data'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { appConfig } from '@/lib/config'
import type { EnhancedToken } from '@definedfi/sdk/dist/resources/graphql'
import { tokens } from '@repo/project-contracts'
import dynamic from 'next/dynamic'

export default async function IndexPage() {
  const res = await getTokensData({})

  if (!res || res.serverError || res.validationErrors || !res.data) {
    return <div>Error</div>
  }

  const tokenData: EnhancedToken[] = res.data.data ?? []

  return (
    <div className="container max-w-[100vw] !overflow-hidden !px-4">
      <Table>
        <TableCaption>Token Information</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Symbol</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Volume (24h)</TableHead>
            <TableHead>Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tokens.map((token, index) => (
            <TableRow key={token.address}>
              <TableCell>{tokenData[index]?.name ?? 'N/A'}</TableCell>
              <TableCell>{tokenData[index]?.symbol ?? 'N/A'}</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>N/A</TableCell>
              <TableCell>
                <TokenBalance token={token} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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
