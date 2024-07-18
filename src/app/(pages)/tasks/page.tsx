import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayAllTask from "@/app/_components/task/displayTask";
import { Suspense } from "react";

const Tasks = ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayAllTask searchParams={searchParams} />
    </section>
  );
};

export default Tasks;
