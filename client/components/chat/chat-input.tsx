"use client"

import { useParams } from "next/navigation"
import { ScrollArea } from "@radix-ui/react-scroll-area"

import { Icons } from "../ui/icons"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

function ChatInputFiles() {
  return <></>
}

export default function ChatInput() {
  const params = useParams() as { chatId: string }
  console.log({ params })
  return (
    <div className="flex-1 flex flex-col gap-2 border-solid border-t-[1px]  border-gray-800 pt-2">
      <div className="px-4"></div>
      <div className="px-1">
        <Textarea
          maxLength={20000}
          rows={1}
          placeholder="Type a message"
          className=" border-0 focus-visible:ring-transparent min-h-0 max-h-56 resize-none py-0"
        ></Textarea>
      </div>
      <div className="flex justify-between px-4">
        <div className="flex gap-2">
          <Icons.ImageIcon className="stroke-1 w-6 h-6"></Icons.ImageIcon>
          <Icons.GifIcon className="stroke-1 w-6 h-6"></Icons.GifIcon>
        </div>
        <Icons.SendHorizonalIcon className="stroke-1"></Icons.SendHorizonalIcon>
      </div>
    </div>
  )
}
