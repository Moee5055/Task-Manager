import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayTask from "@/app/_components/task/Display";
import { MyForm } from "@/app/_components/task/CreateTask";

const Tasks = () => {
  return (
    <section className="pt-6 space-y-8 ">
      <AddTaskComponent>
        <MyForm />
      </AddTaskComponent>
      <DisplayTask />
    </section>
  );
};

export default Tasks;
