"use client";

import ChatInput from "./chat-input";
import ChatMessagesList from "./chat-messages-list";

export default function Chat() {
	return (
		<>
			<div className="flex-1 flex flex-col py-4">
				<div className="flex-1 flex flex-col gap-2 px-4">
					<ChatMessagesList></ChatMessagesList>
				</div>
				<div className="flex">
					<ChatInput></ChatInput>
				</div>
			</div>
		</>
	);
}
