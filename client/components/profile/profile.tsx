'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import ProfileContextProvider from '@/contexts/profile-context'
import IUser from '@/shared/interfaces/user.interface'

import LayoutContent from '../layout-content'
import ProfileContent from './profile-content'
import ProfileHeader from './profile-header'
import ProfileSubscription from './profile-subscription'
import ProfileSubscriptionBundles from './profile-subscription-bundles'

export default function Profile({ user }: { user: IUser }) {
  return (
    <ProfileContextProvider user={user}>
      <div className="flex-1 flex flex-col">
        <ProfileHeader></ProfileHeader>
        <LayoutContent>
          <ProfileSubscription></ProfileSubscription>
        </LayoutContent>
        <LayoutContent>
          <ProfileSubscriptionBundles></ProfileSubscriptionBundles>
        </LayoutContent>
        <ProfileContent></ProfileContent>
      </div>
    </ProfileContextProvider>
  )
}
