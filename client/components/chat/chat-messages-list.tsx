"use client";

import ChatMessagesListItem from "./chat-messages-list-item";
import { useEffect, useState } from "react";
import { useSocketStore } from "@/stores";
import { useChatsService } from "@/hooks";

export default function ChatMessagesList() {
	const { socket } = useSocketStore();
	const { findAllMessages } = useChatsService();
	const [messages, setMessages] = useState<any[]>([]);

	useEffect(() => {}, []);
	useEffect(() => {});

	return (
		<>
			<div className="flex flex-col">
				{messages.map((m) => (
					<>
						<ChatMessagesListItem key={1}></ChatMessagesListItem>
					</>
				))}
			</div>
		</>
	);
}
