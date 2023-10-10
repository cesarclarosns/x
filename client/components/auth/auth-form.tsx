import AuthFormContextProvider, {
	AuthForms,
	useAuthFormContext,
} from "@/contexts/auth-form-context";
import { Button } from "../ui/button";
import { Icons } from "../ui/icons";

function SocialSignIn() {
	return (
		<div className="flex flex-col gap-4">
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-background px-2 text-muted-foreground">
						Or continue with
					</span>
				</div>
			</div>
			<div className="flex">
				<Button
					className="flex-1"
					variant="outline"
					onClick={() =>
						(window.location.href = "http://127.0.0.1:5000/api/auth/google")
					}
				>
					<Icons.google className="mr-2 h-4 w-4" />
					Google
				</Button>
			</div>
		</div>
	);
}
function Form() {
	const { authFormType } = useAuthFormContext();
	const CurrentForm = AuthForms[authFormType];

	return <CurrentForm></CurrentForm>;
}

export default function AuthForm() {
	return (
		<AuthFormContextProvider>
			<div className="flex flex-col gap-10 w-full max-w-[400px]">
				<Form></Form>
				<SocialSignIn></SocialSignIn>
			</div>
		</AuthFormContextProvider>
	);
}
