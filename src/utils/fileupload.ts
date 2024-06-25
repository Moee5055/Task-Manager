import { createClient } from "@supabase/supabase-js";

// Create Supabase client
const supabase = createClient(
  "https://ixgnekopnrhcnlbozxtv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Z25la29wbnJoY25sYm96eHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NDk3ODAsImV4cCI6MjAzNDAyNTc4MH0.W8_AQWs9pqa6QS-5u0kGAz6Px_Cu-C3o65nw04Zrsbc"
);

// Upload file using standard upload
export async function uploadFile(file: File) {
  const { error } = await supabase.storage
    .from("Images")
    .upload(file.name, file);
  if (error) {
    console.log(error);
  } else {
    // Handle success
    console.log("File upload successfully");
  }
}
