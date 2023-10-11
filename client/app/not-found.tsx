import Link from "next/link";

export default function NotFoundPage() {
	return (
		<div>
			<p>Sorry</p>
			<p>This page is not available</p>
			<p>
				The link you followed may be broken, or the page may have been removed.
			</p>
			<p>
				Go back to{" "}
				<span>
					<Link href="/" className=" hover:underline">
						x.com
					</Link>
				</span>
			</p>
		</div>
	);
}
