export default function ChatPage({ params }: { params: { chatId: string } }) {
	return (
		<div>
			<h1>Chat page</h1>
			<p>Chat ID: {params?.chatId}</p>
		</div>
	);
}
