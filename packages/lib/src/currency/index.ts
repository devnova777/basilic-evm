export function formatCurrency({
  value,
  currency = true,
  decimals = 2,
}: {
  value: number | string
  currency?: boolean
  decimals?: number
}): string {
  // Convert value to string and remove any existing commas
  const stringValue = value.toString().replace(/,/g, '')
  const isNegative = stringValue.startsWith('-')

  // Remove negative sign for processing
  const absStringValue = isNegative ? stringValue.slice(1) : stringValue

  // Split into integer and decimal parts
  const [integerPart = '0', decimalPart = ''] = absStringValue.split('.')

  // Format integer part with commas
  const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  // Truncate decimal part to specified decimals (no rounding)
  const truncatedDecimal = decimalPart.slice(0, decimals)

  // Pad with zeros if needed
  const paddedDecimal = truncatedDecimal.padEnd(decimals, '0')

  // Combine parts with currency symbol and handle negative values
  if (currency) {
    return isNegative
      ? `-$${formattedInteger}.${paddedDecimal}`
      : `$${formattedInteger}.${paddedDecimal}`
  }

  return isNegative
    ? `-${formattedInteger}.${paddedDecimal}`
    : `${formattedInteger}.${paddedDecimal}`
}
