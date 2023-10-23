export default function LayoutContentHeader({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col justify-center px-4 h-14 border-solid border-b-[1px] border-r-[1px] border-gray-800">
			{children}
		</div>
	);
}
