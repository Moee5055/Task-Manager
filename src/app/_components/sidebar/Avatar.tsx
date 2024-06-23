"use client";

import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";

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
        className="flex justify-center items-center w-[140px] sm:w-[160px] md:w-[200px] mx-auto py-3
      px-4 bg-background/50 shadow-lg rounded-lg cursor-pointer">
        {userId ? (
          <div className="flex space-x-3 items-center">
            <UserButton afterSignOutUrl="/tasks" />
            <p className="text-sm sm:text-md text-muted-foreground font-semibold tracking-wider">
              {user?.firstName}
            </p>
          </div>
        ) : (
          <p
            className="cursor-pointer text-muted-foreground text-sm sm:text-md"
            onClick={handleClick}>
            Login / SignUp
          </p>
        )}
      </div>
    </>
  );
};

export default AvatarComponent;
