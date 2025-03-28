'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { useCallback, useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

export function AppConnectButton() {
  return <ConnectButton />
}
