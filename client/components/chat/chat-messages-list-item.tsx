export default function ChatMessagesListItem() {
	return (
		<>
			<div className="flex">
				<div className="flex flex-col items-start">
					<div>Attachment</div>
					<div className="rounded-[1rem] rounded-tl-none p-2  bg-slate-700 w-fit">
						Hola
					</div>
				</div>
			</div>
			<div className="flex flex-row-reverse">
				<div className="flex flex-col items-end">
					<div>Attachment</div>
					<div className="rounded-[1rem] rounded-br-none p-2  bg-slate-700 w-fit">
						Hola
					</div>
				</div>
			</div>
		</>
	);
}