import { z } from "zod";

const optionalDateRangeSchema = z.object({
  from: z.date().nullable().optional(),
  to: z.date().nullable().optional(),
});

export const CreateTaskSchema = z.object({
  title: z.string().min(1, { message: "Title Field Required" }),
  description: z.string().optional(),
  date: optionalDateRangeSchema,
  important: z.boolean(),
  completed: z.boolean(),
});
