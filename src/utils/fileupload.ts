import { createClient } from "@supabase/supabase-js";

// Create Supabase client
export const supabase = createClient(
  "https://ixgnekopnrhcnlbozxtv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Z25la29wbnJoY25sYm96eHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NDk3ODAsImV4cCI6MjAzNDAyNTc4MH0.W8_AQWs9pqa6QS-5u0kGAz6Px_Cu-C3o65nw04Zrsbc"
);

// Upload file using standard upload
export async function uploadFile(file: File[], id: string) {
  for (let i = 0; i < file.length; i++) {
    const fileName = `${id}/${file[i]?.name}`;
    const { error } = await supabase.storage
      .from("Images")
      .upload(fileName, file[i]);
    if (error) {
      console.log(error);
    } else {
      // Handle success
      console.log("file upload");
    }
  }
}

export async function getFile(_id: string) {
  const { data, error } = await supabase.storage.from("Images").list(_id);

  if (error) {
    console.error("Error fetching Images : ", error);
  }

  const newData = data?.map((file) => {
    const { name, id } = file;
    const url = `https://ixgnekopnrhcnlbozxtv.supabase.co/storage/v1/object/public/Images/${_id}/${name}`;
    return { url, id };
  });

  return newData;
}

export async function deleteFile(id: string) {
  const { data, error } = await supabase.storage.from("Images").list(id);
  if (error) {
    console.error("Error listing files in folder:", error);
    return null;
  }

  if (data.length < 1) {
    return null;
  }

  if (data) {
    const filesToDelete = data.map((file) => `${id}/${file.name}`);
    const { error: deleteError } = await supabase.storage
      .from("Images")
      .remove(filesToDelete);

    if (deleteError) {
      console.error("Error deleting files in folder:", deleteError);
      return null;
    }
  }

  return true;
}
