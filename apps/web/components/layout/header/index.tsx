'use client'

import { client } from '@/lib/thirdweb'
import Link from 'next/link'
import { ConnectButton } from 'thirdweb/react'
import { Menu } from './menu'

export function Header() {
  return (
    <header className="border-b">
      <div
        className={
          'sticky z-10 top-0 flex max-h-[64px] h-[64px] w-full items-center justify-between p-2 bg-background'
        }
      >
        <div className="flex items-center gap-3">
          <Link href="/">BasilicEVM</Link>

          <div className="hidden md:flex md:gap-3 md:pl-4 lg:ml-[-1px] lg:gap-10">
            <Menu />
          </div>
        </div>

        <div className="flex justify-end lg:min-w-[300px] lg:gap-5">
          <div className="items-center gap-5 flex">
            <ConnectButton
              client={client}
              auth={{
                isLoggedIn: async (address) => {
                  console.log('checking if logged in!', { address })
                  return true
                },
                doLogin: async (params) => {
                  console.log('logging in!')
                },
                getLoginPayload: async ({ address }) => {
                  return {
                    domain: 'example.com',
                    address,
                    statement: 'Please sign this message to log in.',
                    version: '1',
                    chainId: 1,
                    nonce: 'mock-nonce',
                    issued_at: new Date().toISOString(),
                    expiration_time: new Date(
                      Date.now() + 24 * 60 * 60 * 1000,
                    ).toISOString(),
                    invalid_before: new Date().toISOString(),
                  }
                },
                doLogout: async () => {
                  console.log('logging out!')
                },
              }}
            />
          </div>
          <div className="flex lg:hidden">
            {/* DynamicMobileNav component removed */}
          </div>
        </div>
      </div>
    </header>
  )
}
