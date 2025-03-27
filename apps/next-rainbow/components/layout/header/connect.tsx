'use client'

import { isLoggedIn } from '@/actions/login'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export function AppConnectButton() {
  // HACK: Using key state to force ConnectButton remount after SIWE auth
  const [key, setKey] = useState(0)
  const { address } = useAccount()

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isLoggedIn()
      console.log('Auth status:', { authenticated, address })
      setKey((prev) => prev + 1)
    }

    // Check auth when address changes
    if (address) checkAuth()

    // Also check when storage changes
    window.addEventListener('storage', () => {
      console.log('🍀 Storage changed')
      checkAuth()
    })
    return () => window.removeEventListener('storage', checkAuth)
  }, [address])

  return <ConnectButton key={key} />
}
