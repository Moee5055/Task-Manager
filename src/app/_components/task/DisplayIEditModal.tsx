import { getFile } from "@/utils/fileupload";
import EditModal from "./EditModal";
import Image from "next/image";
import { Suspense } from "react";

async function fetchUploadFile(id: string) {
  try {
    const data = await getFile(id);
    return data;
  } catch (error) {
    console.error("Error fetching file:", error);
  }
}

const DispalyEditModal = async ({ id }: { id: string }) => {
  const data = await fetchUploadFile(id);

  if (!data) {
    return null;
  }

  if (data?.length < 0) {
    return null;
  }

  return (
    <EditModal id={id}>
      {data?.length > 0 && (
        <Suspense fallback={<div>...Loading</div>}>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
            {data.map((img) => (
              <div key={img.id} className="relative aspect-square">
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
        </Suspense>
      )}
    </EditModal>
  );
};

export default DispalyEditModal;
