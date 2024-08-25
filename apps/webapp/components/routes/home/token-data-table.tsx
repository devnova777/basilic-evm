import { TokenBalance } from '@/components/shared/token-balance'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { EnhancedToken } from '@definedfi/sdk/dist/sdk/generated/graphql'
import { tokens } from '@repo/tokens'

export function TokenDataTable({ tokenData }: { tokenData: EnhancedToken[] }) {
  return (
    <Table>
      <TableCaption>Token Information</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Symbol</TableHead>
          <TableHead>Total Supply</TableHead>
          <TableHead>Circulating Supply</TableHead>
          <TableHead>Volume (24h)</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tokens.map((token, index) => (
          <TableRow key={token.address}>
            <TableCell>{tokenData[index]?.name ?? 'N/A'}</TableCell>
            <TableCell>{tokenData[index]?.symbol ?? 'N/A'}</TableCell>
            <TableCell>
              {tokenData[index]?.info?.totalSupply ?? 'N/A'}
            </TableCell>
            <TableCell>
              {tokenData[index]?.info?.circulatingSupply ?? 'N/A'}
            </TableCell>
            <TableCell>{'N/A'}</TableCell>
            <TableCell>
              <TokenBalance token={token} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
