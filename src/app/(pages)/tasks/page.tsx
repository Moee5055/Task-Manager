import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayTask from "@/app/_components/task/Display";

const Tasks = () => {
  return (
    <section className="pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayTask />
    </section>
  );
};

export default Tasks;
