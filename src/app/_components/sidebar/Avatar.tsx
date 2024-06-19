import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ShowProfile from "./PopoverContent";
import Profile from "./Profile";

const AvatarComponent = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <div
          className="flex items-center space-x-3 w-[140px] mx-auto py-3 px-4 bg-background/50 
    shadow-lg rounded-lg cursor-pointer">
          <Profile name="Kshitij Shahi" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="relative left-4 bg-background w-auto">
        <ShowProfile />
      </PopoverContent>
    </Popover>
  );
};

export default AvatarComponent;
