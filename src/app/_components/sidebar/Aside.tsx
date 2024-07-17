"use client";

import dynamic from "next/dynamic";
import ToogleButton from "./ToogleSideBar";
import Links from "./Links";
import { Skeleton } from "@/components/ui/skeleton";

const AvatarComponent = dynamic(
  () => import("@/app/_components/sidebar/Avatar"),
  {
    ssr: false,
    loading: () => <Skeleton className="w-full h-[50px]" />,
  }
);

import { useToggleStore } from "@/store/useStore";

const Aside = () => {
  const visible = useToggleStore((state) => state.visibile);

  return (
    <aside
      className={`absolute top-0 bottom-0 left-0 right-0 shadow-lg max-sm:bg-secondary z-10
        pt-6 pb-4 sm:relative sm:w-[30vw] sm:h-full sm:max-w-[250px] sm:min-w-[200px] sm:flex sm:flex-col space-y-7 
        sm:bg-zinc-300/50 dark:bg-secondary sm:rounded-lg
    ${visible ? "flex flex-col" : "hidden"}`}>
      <div className="flex justify-center px-4">
        <AvatarComponent />
        <ToogleButton />
      </div>
      <div className="flex-1 place-content-center">
        <Links />
      </div>
    </aside>
  );
};

export default Aside;
