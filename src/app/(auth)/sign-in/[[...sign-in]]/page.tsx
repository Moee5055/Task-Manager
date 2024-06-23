import LoginModal from "@/app/_components/AuthModal";
import { SignIn } from "@clerk/nextjs";

const LoginPage = () => {
  return (
    // <LoginModal
    //   title="Login"
    //   desc="enter your credentials"
    //   buttonText="Login"
    //   href="/register"`
    //   linkText="Dont' have an account? click here "
    //   providerText="Login in"
    // />
    <main className="min-h-screen flex justify-center items-center">
      <SignIn path="/sign-in" />
    </main>
  );
};

export default LoginPage;
