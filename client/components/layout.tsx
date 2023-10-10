"use client";

import Hero from "./hero";
import HeaderSite from "./header/header-site";
import Content from "./content";

import { useAuthStore } from "@/stores/auth-store";

export default function Layout({ children }: { children: React.ReactNode }) {
	const { auth } = useAuthStore((state) => state);

	return (
		<>
			{!auth && <Hero></Hero>}
			<div className="flex py-5 container">
				<HeaderSite></HeaderSite>
				<div className="flex-1 bg-green-200 container min-h-[500px]">
					{children}
				</div>
			</div>
		</>
	);
}
