import { RootLayout } from '@/components/layout'
import type { Metadata } from 'next'

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <RootLayout>{children}</RootLayout>
    </html>
  )
}

export const metadata: Metadata = {
  title: 'BasilicEVM',
  description: 'BasilicEVM dApp',
}

interface LayoutProps {
  children: React.ReactNode
}
