"use client";

import Link from "next/link";
import { Icons } from "../ui/icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { useAuthStore } from "@/stores/auth-store";

export default function HeaderSite() {
	const { auth } = useAuthStore((state) => state);

	return (
		<header className="h-screen flex flex-col justify-start items-start md:px-5 py-5 sticky">
			<nav className="flex flex-col gap-6">
				<Avatar className=" w-7 h-7">
					<AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<Link href="/" className="flex justify-start items-center gap-2">
					<Icons.home className="w-6 h-6 text-muted-foreground stroke-1"></Icons.home>
					Home
				</Link>
				<Link
					href="/my/chats"
					className="flex justify-start items-center gap-2"
				>
					<Icons.messageSquare className="w-6 h-6 text-muted-foreground stroke-1"></Icons.messageSquare>
					Messages
				</Link>
				<Link
					href="/my/notifications"
					className="flex justify-start items-center gap-2"
				>
					<Icons.bell className="w-6 h-6 text-muted-foreground stroke-1"></Icons.bell>
					Notifications
				</Link>
				{auth && (
					<Link
						href={`/${auth.user?._id}`}
						className="flex justify-start items-center gap-2"
					>
						<Icons.user className="w-6 h-6 text-muted-foreground stroke-1"></Icons.user>
						My profile
					</Link>
				)}

				<Link
					href={"/my/subscriptions"}
					className="flex justify-start items-center gap-2"
				>
					<Icons.users className="w-6 h-6 text-muted-foreground stroke-1"></Icons.users>
					Subscriptions
				</Link>
				<Link href={""} className="flex justify-start items-center gap-2">
					<Icons.circleEllipsisIcon className="w-6 h-6 text-muted-foreground stroke-1"></Icons.circleEllipsisIcon>
				</Link>
			</nav>
		</header>
	);
}
