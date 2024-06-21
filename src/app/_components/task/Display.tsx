"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdDelete } from "react-icons/md";
import { TbPinnedFilled } from "react-icons/tb";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { Input } from "@/components/ui/input";

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
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Assignement
                    <TbPinnedFilled
                      className="h-5 w-5 text-muted-foreground cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    />
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
                  <MdDelete className="h-5 w-5 text-muted-foreground hover:scale-125 cursor-pointer" />
                </CardFooter>
              </Card>
            </DialogTrigger>
            <DialogContent></DialogContent>
          </Dialog>
        </Suspense>
      </div>
    </div>
  );
};

export default DisplayTask;
