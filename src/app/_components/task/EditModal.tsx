"use client";

import { getFile } from "@/utils/getfile";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ImageUpload } from "./UploadImage";

const EditModal = () => {
  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <Form {...form}>
      <form className="space-y-3 sm:space-y-4">
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
        <div>
          <ImageUpload />
        </div>
      </form>
    </Form>
  );
};

export default EditModal;
