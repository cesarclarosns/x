/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useSocketStore } from "@/stores/socket-store";
import ChatInput from "./chat-input";
import ChatMessage from "./chat-message";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Chat() {
	const params = useParams() as { chatId: string };
	const { socket } = useSocketStore((state) => state);
	const [messages, setMessages] = useState<any[]>([]);

	useEffect(() => {
		if (!socket) return;

		let ev = `chats:${1}`;
		socket.on(ev, (payload) => {
			console.log(ev, { payload });
		});

		return () => {
			socket.off(ev);
		};
	}, [socket]);

	return (
		<>
			<div className="flex-1 flex flex-col py-4">
				<div className="flex-1 flex flex-col gap-2 px-4">
					<ChatMessage></ChatMessage>
				</div>
				<div className="flex">
					<ChatInput></ChatInput>
				</div>
			</div>
		</>
	);
}
