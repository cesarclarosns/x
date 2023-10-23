"use client";

import Chat from "@/components/chat/chat";
import ChatHeader from "@/components/chat/chat-header";
import LayoutContent from "@/components/layout-content";
import LayoutContentHeader from "@/components/layout-content-header";
import { useSocketStore } from "@/stores/socket-store";
import { notFound, useParams } from "next/navigation";
import { useEffect } from "react";

export default function ChatPage() {
	const params = useParams();
	const { socket } = useSocketStore();

	useEffect(() => {
		let ev = "chats:messages";
		let ev3 = "chats:events";
		let ev2 = "chats:events";
		// Join chat room
		if (socket) {
			socket.emit("chats:join_chat", { chat: { chatId: params.chatId } });
			socket.on(ev, (payload, cb) => {
				console.log({ payload });
			});
		}

		// Leave chat room
		return () => {
			if (socket) {
				socket.off(ev);
			}
		};
	}, [socket, params]);

	return (
		<div className="flex-1 flex flex-col">
			<LayoutContentHeader>
				<ChatHeader></ChatHeader>
			</LayoutContentHeader>
			<LayoutContent>
				<Chat></Chat>
			</LayoutContent>
		</div>
	);
}
