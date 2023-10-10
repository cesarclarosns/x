export default function ChatsPageLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex gap-5 h-full">
			<div className="bg-blue-50">
				<p>Layout</p>
			</div>
			<div>{children}</div>
		</div>
	);
}
