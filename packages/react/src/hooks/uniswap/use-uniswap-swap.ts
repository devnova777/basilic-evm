import { UniswapV3SwapRouterAbi } from '@repo/core/abis'
import type { AbiParametersToPrimitiveTypes, ExtractAbiFunction } from 'abitype'
import type { Address } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'

export function useUniswapSwap({ routerAddress }: { routerAddress: Address }) {
  const { address: account } = useAccount()
  const { writeContract, ...o } = useWriteContract()

  const swap = async (args: SwapInputType) => {
    if (!account) throw new Error('Wallet not connected')

    const hash = await writeContract({
      address: routerAddress,
      abi: UniswapV3SwapRouterAbi,
      functionName: 'exactInputSingle',
      args,
      account,
      chain: undefined, // Let wagmi infer the current chain
    })
    return hash
  }

  return {
    swap,
    ...o,
  }
}

export type SwapInputType = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<
    typeof UniswapV3SwapRouterAbi,
    'exactInputSingle'
  >['inputs']
>
