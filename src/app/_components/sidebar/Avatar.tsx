"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ShowProfile from "./PopoverContent";
import Profile from "./Profile";
import { useState } from "react";

const AvatarComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <Popover>
      <PopoverTrigger>
        <div
          className="flex items-center space-x-3 w-[140px] sm:w-[160px] md:w-[200px] mx-auto py-3
           px-4 bg-background/50 shadow-lg rounded-lg cursor-pointer">
          {isLogin ? (
            <Profile name="kshitij jung shahi" />
          ) : (
            <div className="w-full">
              <p className="text-sm sm:text-[0.9rem]">Login / SignUp</p>
            </div>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="relative left-4 bg-background w-auto">
        <ShowProfile />
      </PopoverContent>
    </Popover>
  );
};

export default AvatarComponent;
