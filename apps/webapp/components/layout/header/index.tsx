import { Button } from '@/components/ui/button'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import { Suspense } from 'react'

export function Header() {
  return (
    <div className="sticky top-0 z-50 flex h-16 bg-background border-b">
      <div className="container box-content flex flex-row items-center justify-between bg-inherit md:px-4">
        <div className="flex h-full items-center lg:min-w-[100px]">
          <Link href="/">Basilic EVM</Link>
        </div>

        <div className="hidden md:flex md:gap-3 md:pl-4 lg:ml-[-1px] lg:gap-10">
          {/* NavLinks and Navigation components removed */}
        </div>

        {/* Desktop action Buttons */}
        <div className="flex justify-end lg:min-w-[300px] lg:gap-5">
          <div className="items-center gap-5 flex">
            <Suspense fallback={<Button>Login</Button>}>
              <ConnectButton />
            </Suspense>
          </div>
          <div className="flex lg:hidden">
            {/* DynamicMobileNav component removed */}
          </div>
        </div>
      </div>
    </div>
  )
}
