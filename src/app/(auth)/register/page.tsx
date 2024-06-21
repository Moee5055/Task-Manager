import RegisterForm from "@/app/_components/AuthModal";

const SignupPage = () => {
  return (
    <RegisterForm
      title="Sign Up"
      desc="enter your credentials"
      buttonText="Register"
      href="/login"
      linkText="Already have an account? click here "
      providerText="Sign Up"
    />
  );
};

export default SignupPage;
