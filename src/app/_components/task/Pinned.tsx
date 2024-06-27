"use client";

import { TbPinnedFilled } from "react-icons/tb";
const PinnedComponent = ({ completed }: { completed: boolean }) => {
  return (
    <TbPinnedFilled
      className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
        completed && "text-black/80 dark:text-yellow-500"
      }`}
      onClick={(e) => e.stopPropagation()}
    />
  );
};

export default PinnedComponent;
