import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { TbLoader2 } from "react-icons/tb";

const LoginPage = () => {
  return (
    <main className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-sky-500">
      <ClerkLoaded>
        <SignIn path="/sign-in" routing="path" />
      </ClerkLoaded>
      <ClerkLoading>
        <TbLoader2 className="animate-spin text-3xl text-white" />
      </ClerkLoading>
    </main>
  );
};

export default LoginPage;
