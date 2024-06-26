"use server";
import prisma from "@/db";
import { z } from "zod";
import { CreateTaskSchema } from "@/schema/CreateTaskSchema";
import { error } from "console";

export async function createTask(data: z.infer<typeof CreateTaskSchema>) {
  const validateFields = CreateTaskSchema.safeParse(data);

  if (!validateFields.success) {
    return null;
  }

  const {
    title,
    description,
    date: { from, to },
    important,
    completed,
  } = validateFields.data;

  const result = await prisma.task.create({
    data: {
      title,
      desc: description,
      from,
      to,
      isImportant: important,
      isCompleted: completed,
    },
  });

  if (!result) {
    return { message: "error" };
  }

  return null;
}
