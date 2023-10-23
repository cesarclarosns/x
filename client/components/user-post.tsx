import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "./ui/icons";
import { AspectRatio } from "./ui/aspect-ratio";

export default function UserPost() {
	return (
		<div className="min-h-[200px] flex flex-col gap-5">
			<div className="flex flex-row justify-between">
				<div className="flex flex-row gap-5">
					<Avatar className="w-12 h-12 sm:w-12 sm:h-12">
						<AvatarImage src={""}></AvatarImage>
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<div>
						<div className="flex flex-row items-center gap-2">
							Emarbb{" "}
							<span>
								<Icons.badgeCheckIcon className="w-4 h-4"></Icons.badgeCheckIcon>
							</span>
						</div>
						<p className="text-sm">@manu</p>
					</div>
				</div>
				<div className="flex flex-row gap-2">
					<span className="text-xs">Yesterday</span>
					<Icons.moreHorizontalIcon className="w-4 h-4"></Icons.moreHorizontalIcon>
				</div>
			</div>
			<div className="">
				<AspectRatio ratio={16 / 9}>
					<Image
						src={
							"https://i.pinimg.com/564x/8d/b4/5a/8db45ac77819eca514fcdcf4ea31f4d4.jpg"
						}
						alt="Image"
						className="rounded-md object-cover"
						fill={true}
					/>
				</AspectRatio>
			</div>
			<div className="flex flex-row justify-between">
				<div className="flex flex-row gap-5">
					<Icons.heartIcon></Icons.heartIcon>
					<Icons.messageCircleIcon></Icons.messageCircleIcon>
					<Icons.badgeDollarSignIcon></Icons.badgeDollarSignIcon>
				</div>
				<div className="flex flex-row gap-5">
					<Icons.bookmarkIcon></Icons.bookmarkIcon>
				</div>
			</div>
			<div>
				<p className="text-sm">2 Likes</p>
			</div>
		</div>
	);
}
