import type { Metadata } from "next";

import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayAllTask from "@/app/_components/task/displayTask";
import { getTasks } from "@/actions/action";

export const metadata: Metadata = {
  title: "Task | All Tasks",
  description: "Display all your tasks",
};

const Tasks = async ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const allTask = await getTasks();
  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayAllTask
        searchParams={searchParams}
        status="All Tasks"
        data={allTask}
      />
    </section>
  );
};

export default Tasks;
