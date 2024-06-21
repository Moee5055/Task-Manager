"use client";
import { loginformSchema } from "@/schema/LoginformSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type LoginFormProps = {
  buttonText: string;
};

const FormContent = ({ buttonText }: LoginFormProps) => {
  const form = useForm<z.infer<typeof loginformSchema>>({
    resolver: zodResolver(loginformSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginformSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="shahi.moee55@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full tracking-wider">
          {buttonText}
        </Button>
      </form>
    </Form>
  );
};

export default FormContent;
