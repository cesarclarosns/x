"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function UserProfilePage({
	params,
}: {
	params: { id: string };
}) {
	console.log({ params });

	const pathname = usePathname();
	const searchParams = useSearchParams();
	const router = useRouter();

	console.log({ pathname, searchParams, router });

	return (
		<div>
			<h1 className="text-2xl">User profile</h1>
		</div>
	);
}
