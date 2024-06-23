"use client";

import { ModeToggle } from "@/app/_components/Toogle";
import Image from "next/image";
import { InputText } from "primereact/inputtext";
import { FaBars } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { useToggleStore } from "@/store/useStore";

const Header = () => {
  const visible = useToggleStore((state) => state.visibile);
  const setVisible = useToggleStore((state) => state.updateVisile);

  return (
    <div
      className="grid grid-cols-5 sm:grid-cols-6 items-center sm:sticky top-0 
    bg-zinc-300/50 dark:bg-secondary z-40 px-4 py-3 border-b shadow-lg">
      <div className="max-sm:hidden ">
        <Image
          src="/mylogo.png"
          height={60}
          width={60}
          className="w-auto h-auto"
          alt="mylogo"
          priority
        />
      </div>
      <div className="sm:hidden">
        <FaBars
          className="h-5 w-5 cursor-pointer"
          onClick={() => setVisible(true)}
        />
      </div>
      <div className="flex items-center col-span-3 sm:col-span-4 relative max-md:left-3">
        <InputText
          className="bg-secondary rounded-sm py-2 px-3 text-muted-foreground/50
           dark:bg-background/50 w-full"
          placeholder="search ..."
        />
        <IoSearch className="h-5 w-5 relative right-7 text-muted-foreground" />
      </div>
      <div className="text-right">
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
