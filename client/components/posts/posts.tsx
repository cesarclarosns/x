import UserPost from "../user-post";
import Post from "./post";

export default function Posts() {
	const posts = Array.from(Array(1).keys());
	console.log({ posts });

	return (
		<div className="flex flex-col gap-10">
			<UserPost></UserPost>
			{/* {posts.map((post) => (
				<Post key={post}></Post>
			))} */}
		</div>
	);
}
