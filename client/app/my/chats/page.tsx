import { api } from "@/libs/apis"

import { Button } from "@/components/ui/button"
import LayoutContent from "@/components/layout-content"

export default function ChatsPage() {
  return (
    <div className="flex-1 flex flex-col">
      <LayoutContent className="flex-1">
        <div className="flex justify-center items-center flex-1 h-full text-center">
          <div className="p-5 flex flex-col justify-center items-center gap-10">
            <h1 className="text-xl">
              Select any Conversation or send a New Message
            </h1>
            <Button variant={"secondary"}>NEW MESSAGE</Button>
          </div>
        </div>
      </LayoutContent>
    </div>
  )
}
