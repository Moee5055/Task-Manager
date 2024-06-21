import LoginModal from "@/app/_components/AuthModal";

const LoginPage = () => {
  return (
    <LoginModal
      title="Login"
      desc="enter your credentials"
      buttonText="Login"
      href="/register"
      linkText="Dont' have an account? click here "
      providerText="Login in"
    />
  );
};

export default LoginPage;
