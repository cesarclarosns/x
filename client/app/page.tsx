"use client";

import LayoutContent from "@/components/layout-content";
import LayoutContentContainer from "@/components/layout-content-container";
import LayoutContentHeader from "@/components/layout-content-header";
import Posts from "@/components/posts/posts";
import { Icons } from "@/components/ui/icons";
import { useAuthStore } from "@/stores/auth-store";

function Content() {
	return (
		<section className="py-5 flex flex-1 flex-col gap-5">
			<Posts></Posts>
		</section>
	);
}

export default function Home() {
	const { auth } = useAuthStore((state) => state);

	return (
		<div className="flex-1 flex flex-col">
			<LayoutContentHeader>
				<div className="flex justify-between">
					<div>
						{auth ? (
							<h1 className="font-bold text-xl">HOME</h1>
						) : (
							<h1 className="font-bold text-2xl">LATEST FEATURED POSTS</h1>
						)}
					</div>
					<div>
						<Icons.moreVerticalIcon></Icons.moreVerticalIcon>
					</div>
				</div>
			</LayoutContentHeader>
			<LayoutContent>
				<Content></Content>
			</LayoutContent>
		</div>
	);
}
