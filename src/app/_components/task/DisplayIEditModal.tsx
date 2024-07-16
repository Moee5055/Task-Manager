"use client";

import { getFile } from "@/utils/fileupload";
import EditModal from "./EditModal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTaskById } from "@/actions/action";

interface Task {
  id: string;
  title: string;
  desc: string | null;
  createdAt: Date;
  lastModified: Date;
  from: Date | null;
  to: Date | null;
  isImportant: boolean;
  isCompleted: boolean;
}

const DispalyEditModal = ({ id }: { id: string }) => {
  const [imageData, setImageData] = useState<
    { url: string; id: string }[] | null
  >([]);
  const [task, setTaskData] = useState<Task | null>(null);

  useEffect(() => {
    async function fetchUploadFile(id: string) {
      try {
        const data = await getFile(id);
        if (data) {
          setImageData(data);
        }
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
        setTaskData(result);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    }

    fetchUploadFile(id);
    getTask(id);
  }, [id]);

  if (!imageData || !task) {
    return null;
  }

  return (
    <EditModal task={task} id={id}>
      {imageData?.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
          {imageData.map((img, index) => (
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
  );
};

export default DispalyEditModal;
