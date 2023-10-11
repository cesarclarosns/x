import { notFound } from "next/navigation";

export default async function ProfilePage({
	params,
}: {
	params: { id: string };
}) {
	notFound();

	return (
		<div>
			<p>Profile page</p>
			<p>Username: {params?.id}</p>
		</div>
	);
}
