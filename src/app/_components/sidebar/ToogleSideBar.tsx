"use client";

import { useToggleStore } from "@/store/useStore";
import { IoMdClose } from "react-icons/io";

const ToogleButton = () => {
  const setVisible = useToggleStore((state) => state.updateVisile);
  return (
    <IoMdClose
      className="absolute top-2 right-5 h-6 w-6 sm:hidden cursor-pointer text-muted-foreground"
      onClick={() => setVisible(false)}
    />
  );
};

export default ToogleButton;
