import { useAuthStore } from "@/stores/auth-store";

export default function Suggestions() {
	const { auth } = useAuthStore((state) => state);

	return (
		<div className="flex-1 flex self-start sticky top-0 py-5 md:basis-1/3">
			<h1 className="text-xl">SUGGESTIONS</h1>
		</div>
	);
}
