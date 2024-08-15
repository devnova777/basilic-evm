import '@/app/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Providers } from '@/components/layout/providers'

import { appConfig } from '@/lib/config'
import { cn } from '@/lib/utils'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Viewport } from 'next'
import type { Metadata } from 'next'
import type React from 'react'
import { isMobile } from 'react-device-detect'
import { Toaster } from 'react-hot-toast'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn('max-w-full antialiased')}
      suppressHydrationWarning
    >
      <body>
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {/* hamburger layout starts here */}
          <div className="flex-col flex min-h-screen">
            <Header />
            <main className="flex w-full max-w-[100vw] flex-grow flex-col">
              {children}
            </main>
            <Footer />
          </div>
          {/* hamburger layout ends here */}
        </Providers>

        <GoogleAnalytics gaId={appConfig.services.googleAnalyticsId} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: {
    absolute: 'basilica',
    template: '%s | basilica',
  },
  description: 'basilica!',
  metadataBase: new URL('https://basilica.xyz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  openGraph: {
    type: 'website',
    url: 'https://basilica.xyz',
    title: 'basilica',
    description:
      'Be part of the intelligent future and join the Ai/Web3 revolution now!',
    images: [
      {
        url: 'https://basilica.xyz/images/og-image.webp',
        alt: 'basilica',
      },
    ],
  },
  twitter: {
    creator: 'basilica',
    site: '@basilica',
    card: 'summary_large_image',
    images: [
      {
        url: 'https://basilica.xyz/images/og-image.webp',
        alt: 'basilica',
      },
    ],
  },
  robots: 'index, search',
  keywords: [],
}
