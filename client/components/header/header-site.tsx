"use client";

import Link from "next/link";
import { Icons } from "../ui/icons";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { useAuthStore } from "@/stores/auth-store";
import { getInitials } from "@/libs/utils";

type NavProps = React.HTMLAttributes<HTMLElement>;

function HeaderMenu() {
	const { auth } = useAuthStore((state) => state);
	const str = auth?.user.displayName || auth?.user.username;

	return (
		<>
			{auth ? (
				<a href="">
					<Avatar className="w-6 h-6 md:w-7 md:h-7">
						<AvatarImage src={auth.user?.profilePicture}></AvatarImage>
						<AvatarFallback>{getInitials(str!, 2)}</AvatarFallback>
					</Avatar>
				</a>
			) : (
				<span className="flex justify-start items-center gap-2">
					<Icons.circleEllipsisIcon className="w-6 h-6 text-muted-foreground"></Icons.circleEllipsisIcon>
				</span>
			)}
		</>
	);
}

export default function HeaderSite() {
	const { auth } = useAuthStore((state) => state);

	return (
		<div className="flex-1 flex bg-background">
			<header className="flex-1 flex px-10 md:px-0 py-5 md:py-7 border-solid border-gray-800 border-t-[1px] md:border-none">
				<nav className="flex-1 flex flex-row-reverse md:flex-col justify-start items-start gap-5">
					<div className="hidden md:flex">
						<HeaderMenu />
					</div>
					<div className="flex-1 flex md:flex-col justify-between md:justify-start gap-5">
						<Link href="/" className="flex justify-start items-center gap-2">
							<Icons.home className="w-6 h-6 text-muted-foreground "></Icons.home>
							<span className="hidden lg:inline">Home</span>
						</Link>
						{auth && (
							<>
								<Link
									href="/my/notifications"
									className="flex justify-start items-center gap-2"
								>
									<Icons.bell className="w-6 h-6 text-muted-foreground "></Icons.bell>
									<span className="hidden lg:inline">Notifications</span>
								</Link>

								<span className="flex md:hidden justify-start items-center gap-2">
									<Icons.plusSquareIcon className="w-6 h-6 text-muted-foreground "></Icons.plusSquareIcon>
								</span>

								<Link
									href="/my/chats"
									className="flex justify-start items-center gap-2"
								>
									<Icons.messageSquare className="w-6 h-6 text-muted-foreground "></Icons.messageSquare>
									<span className="hidden lg:inline">Messages</span>
								</Link>

								<Link
									href={`/${auth.user?.username}`}
									className="hidden md:flex justify-start items-center gap-2"
								>
									<Icons.user className="w-6 h-6 text-muted-foreground "></Icons.user>
									<span className="hidden lg:inline">My profile</span>
								</Link>

								<Link
									href={"/my/subscriptions"}
									className="hidden md:flex justify-start items-center gap-2"
								>
									<Icons.users className="w-6 h-6 text-muted-foreground "></Icons.users>
									<span className="hidden lg:inline">Subscriptions</span>
								</Link>
							</>
						)}
						<div className="flex md:hidden">
							<HeaderMenu />
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
}
