"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoMdColorFill } from "react-icons/io";
import { ImageUpload } from "./UploadImage";
import { TbPinnedFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { updateTask } from "@/actions/action";
import { format, parseISO } from "date-fns";
import { CreateTaskSchema } from "@/schema/CreateTaskSchema";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@/components/ui/dialog";
import { MdUpload } from "react-icons/md";

import { toast } from "react-hot-toast";

export type Task = {
  id: string;
  title: string;
  desc: string | null;
  createdAt: Date;
  lastModified: Date;
  from: Date | null;
  to: Date | null;
  isImportant: boolean;
  isCompleted: boolean;
};

const EditModal = ({
  task,
  id,
  imageData,
}: {
  task: Task;
  id: string;
  imageData?: any;
}) => {
  const [data, setData] = useState<Task | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof CreateTaskSchema>>({
    resolver: zodResolver(CreateTaskSchema),
    defaultValues: {
      title: "",
      description: "",
      date: {
        from: null,
        to: null,
      },
      important: false,
      completed: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof CreateTaskSchema>) => {
    const myPromise = updateTask({ id, values });
    toast.promise(
      myPromise,
      {
        loading: "Loading",
        success: `Task Updated`,
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
  };

  const formatDate = (date: Date | string) => {
    if (typeof date === "string") {
      // Try to parse the string date
      try {
        return format(parseISO(date), "dd MMM 'at' h:mm a");
      } catch (error) {
        console.error("Error parsing date:", error);
        return "Invalid Date";
      }
    } else if (date instanceof Date) {
      // If it's already a Date object, just format it
      return format(date, "dd MMM 'at' h:mm a");
    } else {
      return "Invalid Date";
    }
  };

  const areDatesEqual = (date1: Date, date2: Date) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    return d1.getTime() === d2.getTime();
  };

  const datesAreEqual =
    data?.createdAt &&
    data?.lastModified &&
    areDatesEqual(data.createdAt, data.lastModified);

  useEffect(() => {
    async function getTask() {
      setData(task);
      form.reset({
        title: task.title,
        description: task.desc || "",
        date: {
          from: task.from,
          to: task.to,
        },
        completed: task.isCompleted,
        important: task.isImportant,
      });
    }
    getTask();
  }, [id, task, form]);

  return (
    <>
      {isLoading && (
        <div className="absolute inset-0 bg-black/80 grid place-items-center z-50">
          <h2 className="flex items-center space-x-3 text-3xl">
            <MdUpload className="size-6 text-white" />
            <span>Uploading ....</span>
          </h2>
        </div>
      )}
      <Form {...form}>
        <form
          className="space-y-4 sm:space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}>
          {imageData?.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
              {imageData.map((img: any, index: number) => (
                <div key={index} className="relative aspect-square">
                  <Image
                    src={img.url}
                    alt={img.id}
                    fill
                    className="rounded-lg object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          )}
          <div className="space-y-3 sm:space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Take a note..."
                      {...field}
                      className="h-20 sm:h-40 2xl:h-50 text-sm overflow-hidden"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div>
            {data?.from && (
              <p className="text-sm text-muted-foreground">
                Complete Time:{" "}
                {data?.from && `${format(data.from, "dd MMM YYY")}`}
                {data?.to && ` - ${format(data.to, "dd MMM YYY")}`}
              </p>
            )}
          </div>
          <div className="flex justify-between items-center">
            <Button
              size="sm"
              type="button"
              className={`${
                data?.isCompleted ? "bg-emerald-500" : "bg-destructive"
              } tracking-wider dark:text-white dark:hover:bg-secondary`}
              onClick={() => {
                form.setValue("completed", !data?.isCompleted);
                const newValue = form.getValues("completed");
                console.log(newValue);
                setData((prevData) => {
                  if (prevData) {
                    return { ...prevData, isCompleted: newValue };
                  }
                  return prevData;
                });
              }}>
              {data?.isCompleted ? "completed" : "incomplete"}
            </Button>
            <span className="text-sm text-muted-foreground">
              {datesAreEqual ? (
                <span>created at: {formatDate(data.createdAt)}</span>
              ) : (
                <>
                  {data?.lastModified &&
                    `last modified: ${formatDate(data.lastModified)}`}
                </>
              )}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex space-x-3 items-center">
              <ImageUpload id={id} setIsLoading={setIsLoading} />
              <IoMdColorFill className="h-6 w-6 text-muted-foreground relative -top-[2px]" />
              <FormField
                control={form.control}
                name="important"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <TbPinnedFilled
                        className={`h-6 w-6 cursor-pointer transition-colors duration-200 ${
                          data?.isImportant
                            ? "text-black dark:text-yellow-500"
                            : "text-muted-foreground dark:hover:text-yellow-300 hover:text-black"
                        }`}
                        onClick={() => {
                          const newValue = !field.value;
                          field.onChange(newValue);
                          setData((prevData) => {
                            if (prevData) {
                              return { ...prevData, isImportant: newValue };
                            }
                            return prevData;
                          });
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <DialogClose asChild>
              <Button type="submit" size="sm">
                Update Task
              </Button>
            </DialogClose>
          </div>
        </form>
      </Form>
    </>
  );
};

export default EditModal;
