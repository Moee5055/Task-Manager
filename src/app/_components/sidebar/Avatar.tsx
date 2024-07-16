"use client";

import { useAuth, useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const AvatarComponent = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const { user } = useUser();

  const handleClick = () => {
    router.push("/sign-in");
  };

  return (
    <>
      <div
        className="flex justify-center items-center w-[50vw] max-sm:w-[30vw] mx-auto py-3
      px-4 bg-background/50 shadow-lg rounded-lg cursor-pointer">
        {userId ? (
          <div className="flex space-x-3 items-center">
            <UserButton afterSignOutUrl="/tasks" />
            <p className="text-sm sm:text-md text-muted-foreground font-semibold tracking-wider">
              {user?.firstName}
            </p>
          </div>
        ) : (
          <div
            className="cursor-pointer text-muted-foreground text-sm sm:text-md"
            onClick={handleClick}>
            Login / SignUp
          </div>
        )}
      </div>
    </>
  );
};

export default AvatarComponent;
