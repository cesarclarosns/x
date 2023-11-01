import { useEffect, useMemo, useState } from 'react'
import { useProfileContext } from '@/contexts/profile-context'
import { formatCompactNumber, getInitials } from '@/libs/utils'
import { useSocketStore } from '@/stores'

import useUsersStatus from '@/hooks/use-users-status'

import LayoutContent from '../layout-content'
import LayoutContentHeader from '../layout-content-header'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Icons } from '../ui/icons'

export default function ProfileHeader() {
  const { user } = useProfileContext()
  const userIds = useMemo(() => [user._id], [user])
  const { usersStatus } = useUsersStatus(userIds)

  const imagesCount = formatCompactNumber(user.imagesCount || 0)
  const videosCount = formatCompactNumber(user.videosCount || 0)
  const initials = user.displayName ? getInitials(user.displayName) : ''

  return (
    <div className="flex flex-col">
      <LayoutContentHeader className="h-44 justify-start py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icons.ArrowLeftIcon></Icons.ArrowLeftIcon>
            <div>
              <div className="flex gap-1 items-center">
                {user.displayName || user.username}
                <Icons.BadgeCheckIcon className="w-5 h-5"></Icons.BadgeCheckIcon>
              </div>

              <div className="flex gap-2 text-xs">
                <div className="flex items-center gap-[0.1rem]">
                  <Icons.ImageIcon className="w-4 h-4"></Icons.ImageIcon>
                  <span>{imagesCount}</span>
                </div>

                <div className="flex items-center gap-[0.1rem]">
                  <Icons.VideoIcon className="w-4 h-4"></Icons.VideoIcon>
                  <span>{videosCount}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Icons.MoreVerticalIcon></Icons.MoreVerticalIcon>
          </div>
        </div>
      </LayoutContentHeader>

      <LayoutContent className="px-4 py-4">
        <div className="flex">
          <div className="-mt-20 relative">
            <Avatar className="w-24 h-24 sm:w-24 sm:h-24">
              <AvatarImage src={user.profilePicture}></AvatarImage>
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            <div className="absolute bottom-6 right-0">
              <span className="relative flex h-3 w-3">
                {usersStatus.online.includes(user._id) ? (
                  <>
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600"></span>
                  </>
                ) : (
                  <>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-slate-400"></span>
                  </>
                )}
              </span>
            </div>
          </div>

          <div className="flex-1 flex justify-end gap-2">
            <Icons.BadgeDollarSignIcon></Icons.BadgeDollarSignIcon>
            <Icons.MessageSquare></Icons.MessageSquare>
            <Icons.StarIcon></Icons.StarIcon>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            {user.displayName || user.username}
            <Icons.BadgeCheckIcon className="w-5 h-5"></Icons.BadgeCheckIcon>
          </div>

          <div className="flex gap-2">
            <span>@{user.username}</span>

            <span>
              {usersStatus.online.includes(user._id) && 'Available now'}
            </span>
          </div>

          <div></div>
        </div>
      </LayoutContent>
    </div>
  )
}
