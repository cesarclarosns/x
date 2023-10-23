import { useState } from "react";
import { Icons } from "../ui/icons";
import ChatConversationsListItem from "./chat-conversations-list-item";
import LayoutContentHeader from "../layout-content-header";
import LayoutContent from "../layout-content";

export default function ChatConversationsList() {
	const [chats, setChats] = useState([{}, {}, {}]);

	return (
		<div className="flex-1 flex flex-col">
			<LayoutContentHeader>
				<div className="flex flex-row justify-between gap-5 ">
					<div className="flex flex-row gap-5">
						<Icons.arrowLeftIcon></Icons.arrowLeftIcon>
						<h1 className="text-xl">MESSAGES</h1>
					</div>
					<div className="flex flex-row gap-5">
						<Icons.search></Icons.search>
						<Icons.plusIcon></Icons.plusIcon>
					</div>
				</div>
			</LayoutContentHeader>
			<LayoutContent>
				<div className="flex flex-col">
					<div className="flex justify-between items-center p-4">
						<p>NEWEST FIRST</p>
						<Icons.listFilter></Icons.listFilter>
					</div>
					<div className="flex flex-col">
						{chats.map((chat, i) => (
							<ChatConversationsListItem key={i}></ChatConversationsListItem>
						))}
					</div>
				</div>
			</LayoutContent>
		</div>
	);
}
