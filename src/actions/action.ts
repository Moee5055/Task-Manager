"use server";
import prisma from "@/db";
import { z } from "zod";
import { CreateTaskSchema } from "@/schema/CreateTaskSchema";
import { revalidatePath } from "next/cache";
import { deleteFile } from "@/utils/fileupload";

type UpdateTask = {
  id: string;
  values: z.infer<typeof CreateTaskSchema>;
};

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
  return { message: "success" };
}

export async function getTasks(isImportant?: boolean) {
  if (isImportant) {
    const data = await prisma.task.findMany({
      where: {
        isImportant,
      },
    });
    return data;
  }

  const data = await prisma.task.findMany();
  return data;
}

export async function getIncompleteTasks(isCompleted: boolean) {
  if (isCompleted) {
    const data = await prisma.task.findMany({
      where: {
        isCompleted: true,
      },
    });
    return data;
  }

  const data = await prisma.task.findMany({
    where: {
      isCompleted: false,
    },
  });
  return data;
}

export async function getTaskById(id: string) {
  const data = await prisma.task.findFirst({
    where: {
      id: id,
    },
  });
  if (!data) {
    return null;
  }

  return data;
}

export async function updateTask({ id, values }: UpdateTask) {
  const {
    title,
    description,
    completed,
    important,
    date: { from, to },
  } = values;

  const result = await prisma.task.update({
    where: {
      id,
    },
    data: {
      title,
      desc: description,
      isImportant: important,
      isCompleted: completed,
    },
  });

  revalidatePath("/tasks");
}

export async function deleteTask(id: string) {
  const result = await prisma.task.delete({
    where: {
      id,
    },
  });

  await deleteFile(id);

  if (!result) {
    return { message: "Error deleting Task" };
  }

  revalidatePath("/tasks");
  return { message: "Succesfully Task Deleted" };
}

export async function searchTask(searchTerm: string) {
  if (searchTerm === "") {
    return [];
  }
  try {
    const result = await prisma.task.findMany({
      where: {
        title: {
          contains: searchTerm,
        },
      },
    });
    return result;
  } catch (err) {
    console.log("error : ", err);
  }
}
