import Image from "next/image"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { AspectRatio } from "./ui/aspect-ratio"
import { Icons } from "./ui/icons"

export default function UserPost() {
  return (
    <div className="min-h-[200px] flex flex-col gap-5">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-5">
          <Avatar className="w-12 h-12 sm:w-12 sm:h-12">
            <AvatarImage src={""}></AvatarImage>
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="flex flex-row items-center gap-2">
              Emarbb{" "}
              <span>
                <Icons.BadgeCheckIcon className="w-4 h-4"></Icons.BadgeCheckIcon>
              </span>
            </div>
            <p className="text-sm">@manu</p>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <span className="text-xs">Yesterday</span>
          <Icons.MoreHorizontalIcon className="w-4 h-4"></Icons.MoreHorizontalIcon>
        </div>
      </div>
      <div className="">
        <AspectRatio ratio={16 / 9}>
          <Image
            src={
              "https://i.pinimg.com/564x/8d/b4/5a/8db45ac77819eca514fcdcf4ea31f4d4.jpg"
            }
            alt="Image"
            className="rounded-md object-cover"
            fill={true}
          />
        </AspectRatio>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-5">
          <Icons.HeartIcon></Icons.HeartIcon>
          <Icons.MessageCircleIcon></Icons.MessageCircleIcon>
          <Icons.BadgeDollarSignIcon></Icons.BadgeDollarSignIcon>
        </div>
        <div className="flex flex-row gap-5">
          <Icons.BookmarkIcon></Icons.BookmarkIcon>
        </div>
      </div>
      <div>
        <p className="text-sm">2 Likes</p>
      </div>
    </div>
  )
}
