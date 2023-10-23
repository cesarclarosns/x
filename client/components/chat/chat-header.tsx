import { Icons } from "../ui/icons";

export default function ChatHeader() {
	return (
		<div className="flex-1 flex flex-row justify-between items-center gap-5">
			<div className="flex flex-row items-center justify-center gap-5">
				<Icons.arrowLeftIcon></Icons.arrowLeftIcon>
				<div className="flex flex-col">
					<div className="flex justify-center items-center gap-2">
						<span className="text-xl">OnlyFans</span>
						<Icons.badgeCheckIcon className="w-4 h-4"></Icons.badgeCheckIcon>
					</div>
					<div className="flex gap-2">
						<Icons.starIcon className="w-4 h-4"></Icons.starIcon>
						<Icons.bellIcon className="w-4 h-4"></Icons.bellIcon>
						<Icons.search className="w-4 h-4"></Icons.search>
					</div>
				</div>
			</div>
			<div className="flex flex-row gap-5">
				<Icons.moreVerticalIcon></Icons.moreVerticalIcon>
			</div>
		</div>
	);
}
