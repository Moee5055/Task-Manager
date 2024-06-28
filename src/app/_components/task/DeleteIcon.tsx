"use client";
import { MdDelete } from "react-icons/md";
import { deleteTask } from "@/actions/action";

export const DeleteIcon = ({ id }: { id: string }) => {
  return (
    <MdDelete
      className="h-5 w-5 text-muted-foreground hover:scale-125 cursor-pointer"
      onClick={async (e) => {
        e.stopPropagation();
        await deleteTask(id);
      }}
    />
  );
};
