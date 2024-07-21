"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DeleteIcon } from "./DeleteIcon";
import PinnedComponent from "./Pinned";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useSearchStore } from "@/store/useSearch";
import { useEffect, useState } from "react";
import { searchTask } from "@/actions/action";
import { useRouter, usePathname } from "next/navigation";

import { Task } from "./EditModal";
import { SkeletonCard } from "@/components/loading";
import { Skeleton } from "@/components/ui/skeleton";
import { ImSpinner8 } from "react-icons/im";

const DisplayTask = ({
  data,
  children,
  status,
}: {
  data: Task[];
  children: React.ReactNode;
  status: string;
}) => {
  const { search } = useSearchStore((state) => state);
  const [searchData, setSearchData] = useState<Task[] | undefined>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [loadingTaskId, setLoadingTaskId] = useState<string | null>(null);
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);

  const router = useRouter();
  const path = usePathname();

  useEffect(() => {
    if (search) {
      setIsSearching(true);
      const tid = setTimeout(() => {
        async function searchByTitle() {
          const result = await searchTask(search);
          setSearchData(result);
          setIsSearching(false);
        }
        searchByTitle();
      }, 1000);

      return () => {
        clearTimeout(tid);
      };
    }
  }, [search]);

  const handleClick = (id: string) => {
    setLoadingTaskId(id);
    router.replace(`${path}?id=${id}`);
    setTimeout(() => {
      setLoadingTaskId(null);
      setOpenDialogId(id);
    }, 1000);
  };

  if (isSearching) {
    return (
      <>
        <div className="px-10">
          <Skeleton className="h-6 w-[100px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </>
    );
  }

  const tasksToDisplay = search ? searchData : data;

  if (tasksToDisplay?.length === 0) {
    return (
      <div className="flex justify-center items-center pt-10 sm:pt-40">
        <h1 className="font-bold text-2xl">No Tasks Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col space-y-3 px-4">
        <div className="space-y-1 relative left-2">
          <h1 className="text-lg sm:text-xl font-bold text-muted-foreground">
            {status}
          </h1>
          <div className="h-1 sm:[50px] sm:w-[70px] bg-muted-foreground rounded-lg"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pt-2">
          {tasksToDisplay?.map((singleTask) => {
            const { id, title, desc, isCompleted, isImportant } = singleTask;
            return (
              <Dialog
                key={id}
                open={openDialogId === id}
                onOpenChange={(isOpen) => {
                  if (!isOpen) {
                    setOpenDialogId(null);
                  }
                }}>
                <Card
                  className="flex flex-col bg-background/50 text-muted-foreground text-sm sm:text-md"
                  onClick={() => handleClick(id)}>
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      {title}
                      <PinnedComponent completed={isImportant} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="break-words whitespace-normal">
                      {desc && desc.length > 25
                        ? `${desc.slice(0, 25)} ...`
                        : desc}
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <Button
                      size="sm"
                      className={`${
                        isCompleted ? "bg-emerald-500" : "bg-destructive"
                      } tracking-wider dark:text-white dark:hover:bg-secondary`}>
                      {isCompleted ? "completed" : "incomplete"}
                    </Button>
                    <DeleteIcon id={id} />
                  </CardFooter>
                </Card>
                {loadingTaskId === id ? (
                  <div className="absolute inset-0 z-50 bg-black/90 grid place-items-center">
                    <h2 className="text-4xl font-extrabold tracking-wider flex items-center space-x-5">
                      <ImSpinner8 className="size-6 animate-spin text-white" />{" "}
                      <span>Loading ....</span>
                    </h2>
                  </div>
                ) : (
                  <DialogContent className="w-[90vw] sm:max-w-md md:max-w-lg outline-none border-none">
                    {children}
                  </DialogContent>
                )}
              </Dialog>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default DisplayTask;
