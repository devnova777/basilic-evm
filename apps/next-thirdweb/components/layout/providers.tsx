'use client'

import { webConfig } from '@/config'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ThirdwebProvider } from 'thirdweb/react'
import { http, type Transport } from 'viem'
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
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <ThirdwebProvider>{children}</ThirdwebProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

// 5. Types & Interfaces
interface ProvidersProps {
  children: React.ReactNode
}
