import { SignUp, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { TbLoader2 } from "react-icons/tb";

const SignupPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-sky-500">
      <ClerkLoaded>
        <SignUp path="/sign-up" routing="path" />
      </ClerkLoaded>
      <ClerkLoading>
        <TbLoader2 className="animate-spin text-3xl text-white" />
      </ClerkLoading>
    </main>
  );
};

export default SignupPage;
