import SignInForm from "@/components/auth/sign-in-form";
import SignUpForm from "@/components/auth/sign-up-form";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type AuthFormType = "signIn" | "signUp" | "passwordReset";
export const AuthForms: { [K in AuthFormType]: React.FunctionComponent } = {
  signIn: SignInForm,
  signUp: SignUpForm,
  passwordReset: () => <></>,
};

export const AuthFormContext = createContext<{
  authFormType: AuthFormType | undefined;
  setAuthFormType: Dispatch<SetStateAction<AuthFormType>> | undefined;
}>({
  authFormType: undefined,
  setAuthFormType: undefined,
});

export default function AuthFormContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [authFormType, setAuthFormType] = useState<AuthFormType>("signIn");

  return (
    <AuthFormContext.Provider value={{ authFormType, setAuthFormType }}>
      {children}
    </AuthFormContext.Provider>
  );
}

export const useAuthFormContext = () => {
  const { authFormType, setAuthFormType } = useContext(AuthFormContext);

  if (authFormType === undefined || setAuthFormType === undefined) {
    throw "useAuthFormContext must be used with AuthFormContextProvider";
  }

  return { authFormType, setAuthFormType };
};
