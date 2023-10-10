import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";
import ChatConversation from "./chat-conversation";

export default function ChatConversations() {
	return (
		<main>
			<div className="flex gap-5">
				<div>
					<div className="flex gap-4 items-center">
						<Icons.arrowLeftIcon></Icons.arrowLeftIcon> MESSAGES{" "}
						<Icons.search></Icons.search>
					</div>
					<div className="flex gap-4 items-center">
						NEWEST FIRST <Icons.listFilter></Icons.listFilter>
					</div>
					<div className="flex gap-5 items-center hover:bg-green-50 hover:cursor-pointer p-5">
						<div>
							<Avatar className=" w-10 h-10">
								<AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<div>
							<div className="flex gap-2">
								<span className="font-bold">Shadcn</span>{" "}
								<Icons.badgeCheckIcon className="stroke-1"></Icons.badgeCheckIcon>
							</div>
							<p>Hola</p>
						</div>
					</div>
				</div>
				<div>
					<p>Select any conversation or send a new message</p>
					<Button>New message</Button>
					<ChatConversation></ChatConversation>
				</div>
			</div>
		</main>
	);
}
