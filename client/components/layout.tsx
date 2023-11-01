'use client'

import { usePathname } from 'next/navigation'
import { cn } from '@/libs/utils'
import { useAuthStore } from '@/stores/auth-store'

import HeaderSite from './header/header-site'
import Hero from './hero'
import LayoutContentContainer from './layout-content-container'
import Suggestions from './suggestions'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { auth } = useAuthStore((state) => state)
  const pathname = usePathname()

  const showSuggestions = !pathname.includes('/my/')

  return (
    <>
      <div className="flex flex-col h-screen">
        {!auth && <Hero></Hero>}
        <div className="flex-1 flex flex-col-reverse md:flex-row md:justify-center md:container">
          {auth && (
            <div className="flex md:self-start sticky bottom-0 md:top-0 z-10">
              <HeaderSite></HeaderSite>
            </div>
          )}
          <div className="flex-1 flex">
            <div
              className={cn(
                'flex-1 flex flex-col md:container',
                showSuggestions ? 'md:basis-2/3' : ''
              )}
            >
              <LayoutContentContainer>{children}</LayoutContentContainer>
            </div>
            {auth && (
              <div
                className={cn(
                  'hidden',
                  showSuggestions
                    ? 'md:flex-1 md:flex md:flex-col md:basis-1/3'
                    : ''
                )}
              >
                <Suggestions></Suggestions>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
