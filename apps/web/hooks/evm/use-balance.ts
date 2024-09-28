import { wagmiConfig } from '@/components/layout/providers'
import { loadingBalance } from '@/lib/constants'
import type { Token } from '@repo/tokens'
import { formatTokenBalance } from '@repo/utils'
import { watchBlockNumber } from '@wagmi/core'
import { useEffect } from 'react'
import { type Abi, type Address, formatUnits } from 'viem'
import { useBalance, useReadContract } from 'wagmi'
import { polygon } from 'wagmi/chains'

export function useNativeBalance(address?: Address) {
  const balance = useBalance({ address, chainId: polygon.id })

  const formatted =
    address && balance.data
      ? formatTokenBalance(balance.data.value, balance.data.decimals)
      : loadingBalance

  useEffect(() => {
    if (!address) return
    const unwatch = watchBlockNumber(wagmiConfig, {
      onBlockNumber() {
        balance.refetch()
      },
    })
    return () => unwatch()
  }, [address, balance])

  return { formatted, ...balance }
}

export function useTokenBalance({
  token,
  abi,
  address,
}: UseTokenBalanaceParams) {
  const result = useReadContract({
    abi,
    address: token.address as Address,
    functionName: 'balanceOf',
    args: address ? [address] : undefined,
  })

  const data = {
    value: BigInt((result.data as bigint) || 0),
    symbol: token.symbol,
    decimals: token.decimals,
  }

  const formatted =
    address && data.value !== undefined && data.decimals !== undefined
      ? formatTokenBalance(data.value, data.decimals)
      : loadingBalance

  useEffect(() => {
    if (!address) return
    const unwatch = watchBlockNumber(wagmiConfig, {
      onBlockNumber() {
        result.refetch()
      },
    })
    return () => unwatch()
  }, [address, result])

  return { ...result, data, formatted }
}

interface UseTokenBalanaceParams {
  token: Token
  abi: Abi
  address?: Address
}
