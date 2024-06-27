"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IoMdColorFill } from "react-icons/io";
import { ImageUpload } from "./UploadImage";
import { TbPinnedFilled } from "react-icons/tb";
import { useEffect, useState } from "react";
import { getTaskById } from "@/actions/action";
import { format, parseISO } from "date-fns";

type Task = {
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
const EditModal = ({ id }: { id: string }) => {
  const [data, setData] = useState<Task | null>(null);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

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
      try {
        const result = await getTaskById(id);
        if (!result) {
          return null;
        }
        setData(result);
        form.reset({
          title: result.title,
          description: result.desc || "",
        });
      } catch (err) {
        console.error("Error fetching data: ", err);
        setData(null);
      }
    }

    getTask();
  }, [id]);

  return (
    <>
      <Form {...form}>
        <form className="space-y-4 sm:space-y-6">
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
              className={`${
                data?.isCompleted ? "bg-emerald-500" : "bg-destructive"
              } tracking-wider dark:text-white dark:hover:bg-secondary`}>
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
              <ImageUpload />
              <IoMdColorFill className="h-6 w-6 text-muted-foreground relative -top-[2px]" />
              <TbPinnedFilled className="h-6 w-6 text-muted-foreground" />
            </div>
            <Button type="submit" size="sm">
              Update Task
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default EditModal;
