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
import { CreateTaskSchema } from "@/schema/CreateTaskSchema";

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

  useEffect(() => {
    async function getTask() {
      try {
        const result = await getTaskById(id);
        if (!result) {
          return null;
        }
        setData(result);
      } catch (err) {
        console.error("Error fetching data: ", err);
        setData(null);
      }
    }

    getTask();
  }, [id]);

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

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
            <p className="text-sm text-muted-foreground">
              Task Date: 14 July - 16 July
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Button
              size="sm"
              className="bg-emerald-500 tracking-wider dark:text-white dark:hover:bg-emerald-600">
              Completed
            </Button>
            <span className="text-sm text-muted-foreground">
              Created-3:30pm
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
