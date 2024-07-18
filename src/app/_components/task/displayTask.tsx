import dynamic from "next/dynamic";

import { getTasks } from "@/actions/action";

import { SkeletonCard } from "@/components/loading";
import { Skeleton } from "@/components/ui/skeleton";

const EditModal = dynamic(() => import("./EditModal"), {
  ssr: false,
  loading: () => <div>Loading....</div>,
});

const DisplayTask = dynamic(() => import("./Display"), {
  ssr: false,
  loading: () => (
    <>
      <div className="px-10">
        <Skeleton className="h-6 w-[100px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </>
  ),
});

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
