"use client";

import { useAuthStore } from "@/stores/auth-store";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const unprotectedPaths = ["/auth"];

export default function RouteGuard({
	children,
}: {
	children: React.ReactNode;
}) {
	const [isLoading, setIsLoading] = useState(true);
	const pathname = usePathname();
	const router = useRouter();
	const { auth } = useAuthStore((state) => state);

	useEffect(() => {
		const pathIsUnprotected = Boolean(
			unprotectedPaths.find((path) => pathname.includes(path)),
		);

		if (!isLoading && !auth && !pathIsUnprotected) {
			router.push("/");
		}
		setIsLoading(false);
	}, [pathname, auth, isLoading, router]);

	if (isLoading) return null;
	return children;
}
