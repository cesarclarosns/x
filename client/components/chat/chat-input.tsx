import { Icons } from "../ui/icons";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function ChatInputFiles() {
	return <></>;
}

export default function ChatInput() {
	return (
		<div className="flex flex-col gap-2">
			<Textarea placeholder="Type a message"></Textarea>
			<div className="flex justify-between">
				<div className="flex gap-2">
					<Icons.imageIcon className="stroke-1 w-6 h-6"></Icons.imageIcon>
					<Icons.gifIcon className="stroke-1 w-6 h-6"></Icons.gifIcon>
				</div>
				<Icons.sendHorizontalIcon className="stroke-1"></Icons.sendHorizontalIcon>
			</div>
		</div>
	);
}
