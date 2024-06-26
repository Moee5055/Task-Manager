"use client";

import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Checkbox } from "@/components/ui/checkbox";
import { DialogClose } from "@radix-ui/react-dialog";
import { DatePickerWithRange } from "@/app/_components/DateRangePicker";
import { CreateTaskSchema } from "@/schema/CreateTaskSchema";
import { Textarea } from "@/components/ui/textarea";
import { uploadFile } from "@/utils/fileupload";
import { createTask } from "@/actions/action";

type FormData = z.infer<typeof CreateTaskSchema>;

export function MyForm() {
  const form = useForm<FormData>({
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

  const onSubmit = async (data: FormData) => {
    await createTask(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 md:space-y-5 2xl:space-y-6 tracking-wider">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Title" {...field} className="text-sm" />
              </FormControl>
              <FormMessage />
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
        <Controller
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <DatePickerWithRange
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="important"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3 space-y-0 border p-2 rounded">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm text-muted-foreground">
                Important
              </FormLabel>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="completed"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3 space-y-0 border p-2 rounded">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <FormLabel className="text-sm text-muted-foreground">
                Completed
              </FormLabel>
            </FormItem>
          )}
        />

        <div className="w-full flex justify-between">
          <Button type="submit">Submit</Button>
          <DialogClose asChild>
            <Button variant={"destructive"}>Close</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
}
