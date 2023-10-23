export default function LayoutContentContainer({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex-1 flex flex-col border-solid border-t-[1px] border-l-[1px] border-gray-800">
			{children}
		</div>
	);
}
