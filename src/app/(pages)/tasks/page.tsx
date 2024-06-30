import { getTasks } from "@/actions/action";
import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayTask from "@/app/_components/task/Display";

const Tasks = async () => {
  const data = await getTasks();
  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayTask data={data} />
    </section>
  );
};

export default Tasks;
