import AuthForm from "./auth/auth-form";

export default function Hero() {
	return (
		<main className="md:bg-gradient-to-r md:from-indigo-500 md:from-50% md:via-white md:via-50% md:to-white">
			<div className="container flex justify-center items-center">
				<div className="md:basis-1/2 flex-1 text-4xl font-bold hidden md:flex items-center justify-center"></div>
				<div className="md:basis-1/2 flex-1 py-20 md:px-5 flex items-center justify-center">
					<AuthForm></AuthForm>
				</div>
			</div>
		</main>
	);
}
