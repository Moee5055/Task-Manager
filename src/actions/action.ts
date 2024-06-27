"use server";
import prisma from "@/db";
import { z } from "zod";
import { CreateTaskSchema } from "@/schema/CreateTaskSchema";
import { error } from "console";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/tasks");
  return null;
}

export async function getTasks() {
  const data = await prisma.task.findMany();
  return data;
}

export async function getTaskById(id: string) {
  const data = await prisma.task.findUnique({
    where: {
      id,
    },
  });
  if (!data) {
    return null;
  }
  console.log(data);

  return data;
}
