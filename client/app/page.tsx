"use client";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";
import { useSocketStore } from "@/stores/socket-store";

export default function Home() {
	const { connect, disconnect } = useSocketStore((state) => state);
	const { auth } = useAuthStore((state) => state);

	return (
		<>
			<section className="flex flex-col gap-5">
				<h1 className="font-bold text-2xl">Latest featured posts</h1>
				<Button onClick={() => connect({ accessToken: auth?.accessToken! })}>
					Connect socket
				</Button>
				<Button onClick={() => disconnect()}>Diconnect socket</Button>
			</section>
		</>
	);
}
