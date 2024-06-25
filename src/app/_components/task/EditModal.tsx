import { getFile } from "@/utils/getfile";

const EditModal = async () => {
  const file = await getFile();
  console.log(file);

  return (
    <div>
      <p>Edit Task</p>
    </div>
  );
};

export default EditModal;
