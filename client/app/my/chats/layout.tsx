"use client";

import ChatConversationsList from "@/components/chat/chat-conversations-list";

export default function ChatsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-1 flex">
			<div className="flex-1 hidden sm:flex">
				<ChatConversationsList></ChatConversationsList>
			</div>
			<div className="flex-1 flex flex-col">{children}</div>
		</div>
	);
}
