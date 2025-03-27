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
import { isLoggedIn, logout, verifyAndLogin } from '@/actions/login'
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
    const nonce = Math.random().toString(36).slice(2)
    console.log('Generated nonce:', nonce)
    return nonce
  },

  createMessage: ({ address, chainId, nonce }) => {
    console.log('Creating message for:', { address, chainId, nonce })
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
    console.log('Prepared message:', preparedMessage)
    return preparedMessage
  },

  verify: async ({ message, signature }) => {
    console.log('Verifying signature:', { message, signature })
    try {
      const success = await verifyAndLogin({ message, signature })
      console.log('Verification result:', success)
      return success
    } catch (error) {
      console.error('Verification failed:', error)
      return false
    }
  },

  signOut: async () => {
    console.log('Signing out')
    await logout()
  },
})

// Configure wagmi and rainbowkit together
export const config = getDefaultConfig({
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

export function Providers({ children }: ProvidersProps) {
  const [authStatus, setAuthStatus] = useState<
    'loading' | 'authenticated' | 'unauthenticated'
  >('loading')

  useEffect(() => {
    const checkAuth = async () => {
      console.log('Checking auth')
      try {
        const authenticated = await isLoggedIn()
        console.log(
          'Auth status:',
          authenticated ? 'authenticated' : 'unauthenticated',
        )
        setAuthStatus(authenticated ? 'authenticated' : 'unauthenticated')
      } catch (error) {
        console.error('Auth check failed:', error)
        setAuthStatus('unauthenticated')
      }
    }
    checkAuth()
  }, [])

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
              appInfo={{
                appName: 'BasilicEVM',
              }}
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
