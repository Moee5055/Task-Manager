"use client";

import { useToggleStore } from "@/store/useStore";
import { IoMdClose } from "react-icons/io";

const ToogleButton = () => {
  const setVisible = useToggleStore((state) => state.updateVisile);
  return (
    <IoMdClose
      className="absolute top-2 right-5 text-3xl text-white sm:hidden cursor-pointer"
      onClick={() => setVisible(false)}
    />
  );
};

export default ToogleButton;
