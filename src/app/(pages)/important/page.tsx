import { getTasks } from "@/actions/action";
import AddTaskComponent from "@/app/_components/task/Addtask";
import DisplayTask from "@/app/_components/task/Display";
import DispalyEditModal from "@/app/_components/task/DisplayIEditModal";

const Important = async ({
  searchParams,
}: {
  searchParams: { id: string };
}) => {
  const data = await getTasks(true);
  const id = searchParams.id;

  return (
    <section className="flex flex-col pt-6 space-y-8 ">
      <AddTaskComponent />
      <DisplayTask data={data}>
        <DispalyEditModal id={id} />
      </DisplayTask>
    </section>
  );
};

export default Important;
