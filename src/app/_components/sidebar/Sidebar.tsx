"use client";

import { useToggleStore } from "@/store/useStore";
import AvatarComponent from "./Avatar";
import Links from "./Links";
import { IoMdClose } from "react-icons/io";
import { SignOutBtn } from "../SignoutBtn";

const SideBar = () => {
  const visible = useToggleStore((state) => state.visibile);
  const setVisible = useToggleStore((state) => state.updateVisile);
  return (
    <aside
      className={`absolute top-0 bottom-0 left-0 right-0 shadow-lg max-sm:bg-secondary z-10
        pt-6 pb-4 sm:relative sm:w-[30vw] sm:h-full sm:max-w-[250px] sm:min-w-[200px] sm:flex sm:flex-col space-y-7 
        sm:bg-zinc-300/50 dark:bg-secondary sm:rounded-lg
    ${visible ? "flex flex-col" : "hidden"}`}>
      <div className="flex justify-center">
        <AvatarComponent />
        <IoMdClose
          className="absolute top-2 right-5 text-3xl text-white sm:hidden cursor-pointer"
          onClick={() => setVisible(false)}
        />
      </div>
      <div className="flex-1 place-content-center">
        <Links />
      </div>
    </aside>
  );
};

export default SideBar;
