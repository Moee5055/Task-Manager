"use client";
import { MdDelete } from "react-icons/md";

export const DeleteIcon = () => {
  return (
    <MdDelete
      className="h-5 w-5 text-muted-foreground hover:scale-125 cursor-pointer"
      onClick={(e) => e.stopPropagation()}
    />
  );
};
