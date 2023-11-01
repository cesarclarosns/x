'use client'

import { CookiesProvider } from 'react-cookie'

import PersistAuth from './auth/persist-auth'
import RouteGuard from './auth/route-guard'

import 'react-query'

import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CookiesProvider defaultSetOptions={{ path: '/' }}>
      <QueryClientProvider client={queryClient}>
        <PersistAuth>
          <RouteGuard>{children}</RouteGuard>
        </PersistAuth>
      </QueryClientProvider>
    </CookiesProvider>
  )
}
