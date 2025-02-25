import { UniswapV3QuoterV2Abi } from '@repo/core/abis'
import type {
  AbiParametersToPrimitiveTypes,
  Address,
  ExtractAbiFunction,
} from 'abitype'
import { useAccount, useWriteContract } from 'wagmi'

export function useUniswapQuote({ quoterAddress }: { quoterAddress: Address }) {
  const { address: account } = useAccount()
  const { writeContract, ...o } = useWriteContract()

  const getQuote = async (args: QuoteInputType) => {
    if (!account) throw new Error('Wallet not connected')

    const result = await writeContract({
      address: quoterAddress,
      abi: UniswapV3QuoterV2Abi,
      functionName: 'quoteExactInput',
      args,
      account,
      chain: undefined, // Let wagmi infer the current chain
    })
    return result
  }

  return {
    getQuote,
    ...o,
  }
}

export type QuoteInputType = AbiParametersToPrimitiveTypes<
  ExtractAbiFunction<typeof UniswapV3QuoterV2Abi, 'quoteExactInput'>['inputs']
>
