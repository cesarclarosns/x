/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Icons } from "../ui/icons";

export default function ChatConversationsListItem() {
	return (
		<>
			<div
				className="min-h-[80px] flex flex-row justify-center items-center hover:bg-blue-900 hover:bg-opacity-20 hover:cursor-pointer gap-5 px-4 border-solid border-b-[1px] border-gray-800"
				onClick={() => {
					console.log("ok");
				}}
			>
				<div className="">
					<Avatar>
						<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
				</div>
				<div className="flex-1 flex flex-col justify-center">
					<div className="flex flex-row justify-between items-center">
						<p className="font-semibold text-sm">Lily</p>
						<div>
							<Icons.xIcon className="w-4 h-4"></Icons.xIcon>
						</div>
					</div>
					<div className="flex flex-row justify-between items-center gap-5">
						<p className="text-sm">I'm legit up for work</p>
						<div className="flex flex-row justify-between items-center gap-5">
							<p className="text-xs">jun 24</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
