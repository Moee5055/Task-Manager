"use client";

import { TbPinnedFilled } from "react-icons/tb";
const PinnedComponent = () => {
  return (
    <TbPinnedFilled
      className="h-5 w-5 text-muted-foreground cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    />
  );
};

export default PinnedComponent;
