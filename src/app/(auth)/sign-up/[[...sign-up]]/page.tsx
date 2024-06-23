import RegisterForm from "@/app/_components/AuthModal";
import { SignUp } from "@clerk/nextjs";

const SignupPage = () => {
  return (
    // <RegisterForm
    //   title="Sign Up"
    //   desc="enter your credentials"
    //   buttonText="Register"
    //   href="/login"
    //   linkText="Already have an account? click here "
    //   providerText="Sign Up"
    // />
    <main className="min-h-screen flex justify-center items-center">
      <SignUp path="/sign-up" />
    </main>
  );
};

export default SignupPage;
