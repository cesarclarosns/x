'use client'

import { notFound } from 'next/navigation'
import { useUsersService } from '@/hooks'
import { useQuery } from 'react-query'

import LayoutContent from '@/components/layout-content'
import Loading from '@/components/loading'
import Profile from '@/components/profile/profile'

export default function ProfilePage({ params }: { params: { id: string } }) {
  const username = params.id
  if (!username) notFound()

  const { getUserProfileByUsername } = useUsersService()
  const queryResult = useQuery(
    ['users', username],
    () => getUserProfileByUsername(username),
    {}
  )

  return (
    <div className="flex-1 flex flex-col">
      {queryResult.isLoading && (
        <LayoutContent>
          <Loading></Loading>
        </LayoutContent>
      )}
      {queryResult.isSuccess && <Profile user={queryResult.data}></Profile>}
      {queryResult.isError && notFound()}
    </div>
  )
}
