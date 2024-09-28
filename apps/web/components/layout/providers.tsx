'use client'

import {
  RainbowKitProvider,
  type Theme,
  getDefaultConfig,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import {
  metaMaskWallet,
  trustWallet,
  walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { merge } from 'lodash'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ThemeProviderProps } from 'next-themes/dist/types'
import { WagmiProvider } from 'wagmi'
import { polygon } from 'wagmi/chains'

const queryClient = new QueryClient()

export const wagmiConfig = getDefaultConfig({
  appName: 'basilic',
  projectId: '25a868c834c1003aa0f0b69aba0ae056',
  wallets: [
    {
      groupName: 'Popular',
      wallets: [metaMaskWallet, trustWallet, walletConnectWallet],
    },
  ],
  chains: [polygon],
})

const customRainbowKitTheme = merge(lightTheme(), {
  colors: {
    connectButtonBackground: '#fff',
    connectButtonInnerBackground: '#fff',
    connectButtonText: '#000',
  },
  radii: {
    actionButton: '9999px',
    connectButton: '9999px',
  },
} as Theme)

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <RainbowKitProvider
            theme={customRainbowKitTheme}
            modalSize="compact"
            showRecentTransactions={true}
            appInfo={{
              appName: 'Basilic',
            }}
          >
            {children}
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </NextThemesProvider>
  )
}
