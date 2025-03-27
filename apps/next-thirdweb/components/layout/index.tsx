import localFont from 'next/font/local'
import { Footer } from './footer'
import { Header } from './header'
import { Providers } from './providers'
import '@repo/ui/globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
})

export function RootLayout({ children }: RootLayoutProps) {
  return (
    <body className={`${geistSans.variable} ${geistMono.variable}`}>
      <Providers>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </Providers>
    </body>
  )
}

interface RootLayoutProps {
  children: React.ReactNode
}
