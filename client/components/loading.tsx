import { Icons } from "./ui/icons";

export default function Loading() {
	return (
		<div className="h-screen bg-black text-white font-bold flex flex-col justify-center items-center">
			<Icons.spinner className="animate-spin"></Icons.spinner>
		</div>
	);
}
