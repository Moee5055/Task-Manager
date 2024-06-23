import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Form from "./Authform";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

type FormProps = {
  title: string;
  desc: string;
  buttonText: string;
  linkText: string;
  href: string;
  providerText?: string;
};

const AuthModal = ({
  title,
  desc,
  buttonText,
  linkText,
  href,
  providerText,
}: FormProps) => {
  return (
    <Card className="w-[90vw] sm:w-[400px]">
      <CardHeader className="text-center space-y-2">
        <CardTitle className="tracking-wider">{title}</CardTitle>
        <CardDescription>{desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form buttonText={buttonText} />
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <p className="text-center">or</p>
        <div className="h-[3px] w-full mx-auto bg-white rounded"></div>
      </CardFooter>
      <CardFooter>
        <Button className="w-full tracking-wider text-zinc-800">
          <FcGoogle className="h-5 w-5" />
          <span className="flex-1 text-sm">{providerText} with</span>
        </Button>
      </CardFooter>
      <CardFooter>
        <Link href={`${href}`}>
          <Button variant="link">{linkText}</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default AuthModal;
