import { getTasks } from "@/actions/action";

import DisplayTask from "./Display";
import EditModal from "./EditModal";

import { getFile } from "@/utils/fileupload";
import { getTaskById } from "@/actions/action";

async function fetchUploadFile(id: string) {
  try {
    const data = await getFile(id);
    return data;
  } catch (error) {
    console.error("Error fetching file:", error);
  }
}

async function getTask(id: string) {
  try {
    const result = await getTaskById(id);
    if (!result) {
      return null;
    }
    return result;
  } catch (err) {
    console.error("Error fetching data: ", err);
  }
}

const DisplayAllTask = async ({
  searchParams,
}: {
  searchParams: { id: string | undefined };
}) => {
  const allTask = await getTasks();
  const id = searchParams?.id;
  let image, task;

  if (id) {
    image = await fetchUploadFile(id);
    task = await getTask(id);
  }

  return (
    <>
      <DisplayTask data={allTask}>
        {id && task && <EditModal task={task} id={id} imageData={image} />}
      </DisplayTask>
    </>
  );
};

export default DisplayAllTask;
