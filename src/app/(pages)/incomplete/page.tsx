import type { Metadata } from "next";

import { getIncompleteTasks } from "@/actions/action";
import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayAllTask from "@/app/_components/task/displayTask";

export const metadata: Metadata = {
  title: "Task | Incomplete",
  description: "Display all your incomplete tasks",
};

const Incomplete = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const data = await getIncompleteTasks(false);

  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayAllTask
        searchParams={searchParams}
        status="Incomplete"
        data={data}
      />
    </section>
  );
};

export default Incomplete;
