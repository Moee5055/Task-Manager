import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteIcon } from "./DeleteIcon";
import PinnedComponent from "./Pinned";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import EditModal from "./EditModal";

const DisplayTask = () => {
  return (
    <div className="flex flex-col space-y-3 px-4">
      <div className="space-y-1 relative left-2">
        <h1 className="text-lg sm:text-xl font-bold text-muted-foreground">
          All Tasks
        </h1>
        <div className="h-1 sm:[50px] sm:w-[70px] bg-muted-foreground rounded-lg"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pt-2">
        <Suspense fallback={<Skeleton />}>
          <Dialog>
            <DialogTrigger asChild>
              <Card className="flex flex-col bg-background/50 text-muted-foreground text-sm sm:text-md">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Assignement
                    <PinnedComponent />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Accusamus voluptate beatae illo possimus quaerat omnis porro
                    aut perspiciatis saepe repudiandae.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <Button variant={"outline"}>completed</Button>
                  <DeleteIcon />
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent>
              <EditModal />
            </DialogContent>
          </Dialog>
        </Suspense>
      </div>
    </div>
  );
};

export default DisplayTask;
