/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import ChatMessagesListItem from "./chat-messages-list-item";
import { useEffect, useState } from "react";
import { useSocketStore } from "@/stores";
import { useChatsService } from "@/hooks";
import { Subscription } from "rxjs";
import IMessage from "@/shared/interfaces/message.interface";

export default function ChatMessagesList() {
	const { socket, $connect, $disconnect } = useSocketStore();
	const { findAllMessages } = useChatsService();
	const [messages, setMessages] = useState<IMessage[]>([]);

	const orderedMessages = messages.reduce((prev, curr) => {
		prev.push(curr);
		return prev;
	}, [] as IMessage[]);

	const appendMessages = (newMesssages: IMessage[]) => {
		setMessages((prevMessages) => {
			newMesssages.forEach((n) => {
				if (!!prevMessages.find((p) => p.id == n.id)) prevMessages.push(n);
			});

			return prevMessages;
		});
	};

	useEffect(() => {
		if (!socket) return;

		let subscription = new Subscription();

		subscription.add(
			$connect.subscribe(async () => {
				let lastMessageId = messages.at(-1)?.id;
				const newMessages = await findAllMessages();
				appendMessages(newMessages);
			}),
		);

		socket.on("chats/chat/new-message", () => {
			let message = {} as IMessage;
			let messages: IMessage[] = [message];
			appendMessages(messages);
		});

		return () => {
			subscription.unsubscribe();
			socket.off("chats/chat/new-message");
		};
	}, [socket]);

	useEffect(() => {
		// Fetch all messages
	}, []);

	return (
		<>
			<div className="flex flex-col">
				{messages.map((m) => (
					<>
						<ChatMessagesListItem key={m.id} message={m}></ChatMessagesListItem>
					</>
				))}
			</div>
		</>
	);
}
