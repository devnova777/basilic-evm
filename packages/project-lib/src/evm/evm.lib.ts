import { formatUnits } from 'viem'
export function formatAddress(address: string) {
  // Ensure the address is a string and has a length of at least 8 characters
  if (typeof address === 'string' && address.length >= 8) {
    return `${address.slice(0, 4)}...${address.slice(-4)}`
  }
  // Return the original address if it's too short or not a string
  return address
}

export function formatTokenBalance(value: bigint, decimals: number): string {
  const formatted = formatUnits(value, decimals)
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  })
    .format(Number.parseFloat(formatted))
    .replace('$', '')
}
