import { usePonderQuery } from '@ponder/react'
import { swapsQueryOptions } from '../ponder/client'

export const useSwaps = () => {
  const { data, ...o } = usePonderQuery(swapsQueryOptions)

  return {
    swaps: data,
    ...o,
  }
}
