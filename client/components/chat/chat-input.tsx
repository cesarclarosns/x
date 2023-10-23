"use client";

import { useParams } from "next/navigation";
import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";

function ChatInputFiles() {
	return <></>;
}

export default function ChatInput() {
	const params = useParams() as { chatId: string };
	console.log({ params });
	return (
		<div className="flex-1 flex flex-col gap-2 border-solid border-t-[1px]  border-gray-800 pt-2">
			<div className="px-4"></div>
			<div className="px-1">
				<Textarea
					maxLength={20000}
					rows={1}
					placeholder="Type a message"
					className=" border-0 focus-visible:ring-transparent min-h-0 max-h-56 resize-none py-0"
				></Textarea>
			</div>
			<div className="flex justify-between px-4">
				<div className="flex gap-2">
					<Icons.imageIcon className="stroke-1 w-6 h-6"></Icons.imageIcon>
					<Icons.gifIcon className="stroke-1 w-6 h-6"></Icons.gifIcon>
				</div>
				<Icons.sendHorizontalIcon className="stroke-1"></Icons.sendHorizontalIcon>
			</div>
		</div>
	);
}
