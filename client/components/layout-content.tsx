export default function LayoutContent({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-1 flex flex-col border-solid border-b-[1px] border-r-[1px] border-gray-800">
			{children}
		</div>
	);
}
