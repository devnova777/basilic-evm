'use client'

import { webConfig } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThirdwebProvider } from 'thirdweb/react'
import { http } from 'viem'
import { WagmiProvider, createConfig } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'

const queryClient = new QueryClient()

export const wagmiConfig = createConfig({
  chains: [arbitrumSepolia],
  transports: {
    [arbitrumSepolia.id]: http(webConfig.services.rpc.arbitrumSepolia),
  },
})

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={wagmiConfig}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}

// 5. Types & Interfaces
interface ProvidersProps {
  children: React.ReactNode
}
