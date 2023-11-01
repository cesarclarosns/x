import Providers from '@/components/providers'

import './globals.css'

import type { Metadata } from 'next'
import { GeistSans } from 'geist/font'

import { Toaster } from '@/components/ui/toaster'
import Layout from '@/components/layout'

export const metadata: Metadata = {
  title: 'X',
  description: 'X'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
        <Toaster></Toaster>
      </body>
    </html>
  )
}
