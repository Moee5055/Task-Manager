import { getIncompleteTasks } from "@/actions/action";
import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayTask from "@/app/_components/task/Display";

const Incomplete = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const data = await getIncompleteTasks(false);
  const id = searchParams.id;

  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
    </section>
  );
};

export default Incomplete;
