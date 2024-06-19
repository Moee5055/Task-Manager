import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const AddTaskComponent: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger className="w-full px-4">
        <Input
          placeholder="Take a note..."
          className="dark:bg-background/50 shadow-lg py-6 px-4 mx-auto max-w-xl"
        />
      </DialogTrigger>
      <DialogContent className="w-[90vw] sm:max-w-md md:max-w-lg">
        <p>moee</p>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskComponent;
