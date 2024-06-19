"use client";

import { useToggleStore } from "@/store/useStore";
import AvatarComponent from "./Avatar";
import Links from "./Links";

type AsideProps = {
  children: React.ReactNode;
};

const Aside = ({ children }: AsideProps) => {
  const visible = useToggleStore((state) => state.visibile);

  return (
    <aside
      className={`absolute top-0 bottom-0 left-0 right-0 shadow-lg max-sm:bg-secondary z-10
        pt-6 pb-4 sm:relative sm:w-[30vw] sm:h-full sm:max-w-[250px] sm:min-w-[200px] sm:flex sm:flex-col space-y-7 
        sm:bg-zinc-300/50 dark:bg-secondary sm:rounded-lg
    ${visible ? "flex flex-col" : "hidden"}`}>
      {children}
    </aside>
  );
};

export default Aside;
