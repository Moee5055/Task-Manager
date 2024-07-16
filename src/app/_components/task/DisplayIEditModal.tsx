import { getFile } from "@/utils/fileupload";
import EditModal from "./EditModal";
import Image from "next/image";
import { Suspense } from "react";
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

const DispalyEditModal = async ({ id }: { id: string }) => {
  const data = await fetchUploadFile(id);
  const task = await getTask(id);

  if (!data || !task) {
    return null;
  }

  return (
    <Suspense fallback={<div>...Loading</div>}>
      <EditModal task={task} id={id}>
        {data?.length > 0 && (
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
            {data.map((img, index) => (
              <div key={index} className="relative aspect-square">
                <Image
                  src={img.url}
                  alt={img.id}
                  fill
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        )}
      </EditModal>
    </Suspense>
  );
};

export default DispalyEditModal;
