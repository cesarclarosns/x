"use client"

import useChatInit from "@/hooks/use-init-chat"
import Chat from "@/components/chat/chat"
import ChatHeader from "@/components/chat/chat-header"
import LayoutContent from "@/components/layout-content"
import LayoutContentHeader from "@/components/layout-content-header"

export default function ChatPage() {
  const {} = useChatInit()

  return (
    <div className="flex-1 flex flex-col">
      <LayoutContentHeader>
        <ChatHeader></ChatHeader>
      </LayoutContentHeader>
      <LayoutContent>
        <Chat></Chat>
      </LayoutContent>
    </div>
  )
}
