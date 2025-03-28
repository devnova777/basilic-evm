'use client'

import { webConfig } from '@/config'
import {
  RainbowKitAuthenticationProvider,
  RainbowKitProvider,
  type Theme as RainbowKitTheme,
  createAuthenticationAdapter,
  darkTheme,
  getDefaultConfig,
} from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import { getNonce, isLoggedIn, logout, verifyMessage } from '@/actions/login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { merge } from 'lodash'
import { ThemeProvider } from 'next-themes'
import { useEffect, useState } from 'react'
import { SiweMessage } from 'siwe'
import { http } from 'viem'
import { WagmiProvider } from 'wagmi'
import { arbitrumSepolia } from 'wagmi/chains'

const queryClient = new QueryClient()

const authenticationAdapter = createAuthenticationAdapter({
  getNonce: async () => {
    console.log('📝 Requesting new nonce...')
    const { nonce } = await getNonce()
    console.log('✅ Received nonce:', nonce)
    return nonce
  },

  createMessage: ({ address, chainId, nonce }) => {
    console.log('📝 Creating SIWE message:', { address, chainId, nonce })
    const message = new SiweMessage({
      domain: window.location.host,
      address,
      statement: 'Sign in to BasilicEVM',
      uri: window.location.origin,
      version: '1',
      chainId,
      nonce,
    })
    const preparedMessage = message.prepareMessage()
    console.log('✅ Prepared SIWE message:', preparedMessage)
    return preparedMessage
  },

  verify: async ({ message, signature }) => {
    console.log('🔐 Verifying signature...', { message, signature })
    try {
      const result = await verifyMessage({ message, signature })
      return result.success
    } catch (error) {
      console.error('❌ Verification error:', error)
      return false
    }
  },

  signOut: async () => {
    console.log('👋 Initiating sign out...')
    await logout()
    console.log('✅ Logout successful')
  },
})

export function Providers({ children }: ProvidersProps) {
  const [authStatus, setAuthStatus] = useState<
    'loading' | 'authenticated' | 'unauthenticated'
  >('loading')

  useEffect(() => {
    isLoggedIn().then((authenticated) => {
      setAuthStatus(authenticated ? 'authenticated' : 'unauthenticated')
    })
  }, [])

  const config = getDefaultConfig({
    appName: 'BasilicEVM',
    projectId: webConfig.services.walletconnect.projectId,
    chains: [arbitrumSepolia],
    transports: {
      [arbitrumSepolia.id]: http(webConfig.services.rpc.arbitrumSepolia),
    },
  }) satisfies ReturnType<typeof getDefaultConfig>

  const customRainbowKitTheme: RainbowKitTheme = merge(darkTheme(), {
    colors: {
      accentColor: '#27292B',
      accentColorForeground: '#fff',
      connectButtonBackground: '#27292B',
      connectButtonText: '#FFFFFF',
    },
    radii: {
      actionButton: '9999px',
      connectButton: '9999px',
    },
  })

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <RainbowKitAuthenticationProvider
            adapter={authenticationAdapter}
            status={authStatus}
          >
            <RainbowKitProvider
              theme={customRainbowKitTheme}
              modalSize="compact"
              showRecentTransactions={true}
              appInfo={{ appName: 'BasilicEVM' }}
            >
              {children}
            </RainbowKitProvider>
          </RainbowKitAuthenticationProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

// 5. Types & Interfaces
interface ProvidersProps {
  children: React.ReactNode
}
