import { useState } from "react"

import LayoutContent from "../layout-content"
import LayoutContentHeader from "../layout-content-header"
import { Icons } from "../ui/icons"
import ChatConversationsListItem from "./chat-conversations-list-item"

export default function ChatConversationsList() {
  const [chats, setChats] = useState([{}, {}, {}])

  return (
    <div className="flex-1 flex flex-col">
      <LayoutContentHeader>
        <div className="flex flex-row justify-between gap-5 ">
          <div className="flex flex-row gap-5">
            <Icons.ArrowLeftIcon></Icons.ArrowLeftIcon>
            <h1 className="text-xl">MESSAGES</h1>
          </div>
          <div className="flex flex-row gap-5">
            <Icons.Search></Icons.Search>
            <Icons.PlusIcon></Icons.PlusIcon>
          </div>
        </div>
      </LayoutContentHeader>
      <LayoutContent className="flex-1">
        <div className="flex flex-col">
          <div className="flex justify-between items-center p-4">
            <p>NEWEST FIRST</p>
            <Icons.ListFilter></Icons.ListFilter>
          </div>
          <div className="flex flex-col">
            {chats.map((chat, i) => (
              <ChatConversationsListItem key={i}></ChatConversationsListItem>
            ))}
          </div>
        </div>
      </LayoutContent>
    </div>
  )
}
