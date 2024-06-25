import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const AddTaskComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full px-4">
        <Input
          placeholder="Take a note..."
          className="dark:bg-background/50 bg-secondary shadow-lg py-6 px-4 mx-auto max-w-xl"
        />
      </DialogTrigger>
      <DialogContent className="w-[90vw] sm:max-w-md md:max-w-lg">
        <DialogHeader>
          <h2 className="text-md mb-3 font-bold tracking-wide text-muted-foreground text-left">
            Create New Task
          </h2>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskComponent;
