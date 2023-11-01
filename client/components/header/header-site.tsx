"use client"

import Link from "next/link"
import { getInitials } from "@/libs/utils"
import { useAuthStore } from "@/stores/auth-store"

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { Icons } from "../ui/icons"

type NavProps = React.HTMLAttributes<HTMLElement>

function HeaderMenu() {
  const { auth } = useAuthStore((state) => state)
  const str = auth?.user.displayName || auth?.user.username

  return (
    <>
      {auth ? (
        <a href="">
          <Avatar className="w-6 h-6 md:w-7 md:h-7">
            <AvatarImage src={auth.user?.profilePicture}></AvatarImage>
            <AvatarFallback>{getInitials(str!, 2)}</AvatarFallback>
          </Avatar>
        </a>
      ) : (
        <span className="flex justify-start items-center gap-2">
          <Icons.CircleEllipsisIcon className="w-6 h-6 text-muted-foreground"></Icons.CircleEllipsisIcon>
        </span>
      )}
    </>
  )
}

export default function HeaderSite() {
  const { auth } = useAuthStore((state) => state)

  return (
    <div className="flex-1 flex bg-background">
      <header className="flex-1 flex px-10 md:px-0 py-5 md:py-7 border-solid border-gray-800 border-t-[1px] md:border-none">
        <nav className="flex-1 flex flex-row-reverse md:flex-col justify-start items-start gap-5">
          <div className="hidden md:flex">
            <HeaderMenu />
          </div>
          <div className="flex-1 flex md:flex-col justify-between md:justify-start gap-5">
            <Link href="/" className="flex justify-start items-center gap-2">
              <Icons.Home className="w-6 h-6 text-muted-foreground "></Icons.Home>
              <span className="hidden lg:inline">Home</span>
            </Link>
            {auth && (
              <>
                <Link
                  href="/my/notifications"
                  className="flex justify-start items-center gap-2"
                >
                  <Icons.Bell className="w-6 h-6 text-muted-foreground "></Icons.Bell>
                  <span className="hidden lg:inline">Notifications</span>
                </Link>

                <span className="flex md:hidden justify-start items-center gap-2">
                  <Icons.PlusSquareIcon className="w-6 h-6 text-muted-foreground "></Icons.PlusSquareIcon>
                </span>

                <Link
                  href="/my/chats"
                  className="flex justify-start items-center gap-2"
                >
                  <Icons.MessageSquare className="w-6 h-6 text-muted-foreground "></Icons.MessageSquare>
                  <span className="hidden lg:inline">Messages</span>
                </Link>

                <Link
                  href={`/${auth.user?.username}`}
                  className="hidden md:flex justify-start items-center gap-2"
                >
                  <Icons.User className="w-6 h-6 text-muted-foreground "></Icons.User>
                  <span className="hidden lg:inline">My profile</span>
                </Link>

                <Link
                  href={"/my/subscriptions"}
                  className="hidden md:flex justify-start items-center gap-2"
                >
                  <Icons.Users className="w-6 h-6 text-muted-foreground "></Icons.Users>
                  <span className="hidden lg:inline">Subscriptions</span>
                </Link>
              </>
            )}
            <div className="flex md:hidden">
              <HeaderMenu />
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
