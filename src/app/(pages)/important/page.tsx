import type { Metadata } from "next";

import { getTasks } from "@/actions/action";
import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayAllTask from "@/app/_components/task/displayTask";

export const metadata: Metadata = {
  title: "Task | Important",
  description: "Display all your important tasks",
};

const Important = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const data = await getTasks(true);

  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayAllTask
        searchParams={searchParams}
        status="Important"
        data={data}
      />
    </section>
  );
};

export default Important;
