import { FaSignOutAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const SignOutBtn = () => {
  return (
    <Button className="text-sm md:text-md space-x-3 text-[#09090B]/80 tracking-wide">
      <FaSignOutAlt className="h-5 w-5" />
      <p>Sign Out</p>
    </Button>
  );
};
