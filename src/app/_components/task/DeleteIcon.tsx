import { MdDelete } from "react-icons/md";
import { deleteTask } from "@/actions/action";
import { toast } from "react-hot-toast";

export const DeleteIcon = ({ id }: { id: string }) => {
  return (
    <MdDelete
      className="h-5 w-5 text-muted-foreground hover:scale-125 cursor-pointer"
      onClick={async (e) => {
        e.stopPropagation();
        const myPromise = deleteTask(id);
        toast.promise(
          myPromise,
          {
            loading: "Loading",
            success: `Task Deleted`,
            error: (err) => `This just happened: ${err.toString()}`,
          },
          {
            style: {
              minWidth: "250px",
            },
            success: {
              duration: 5000,
              icon: "✅",
            },
          }
        );
      }}
    />
  );
};
