import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ixgnekopnrhcnlbozxtv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml4Z25la29wbnJoY25sYm96eHR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg0NDk3ODAsImV4cCI6MjAzNDAyNTc4MH0.W8_AQWs9pqa6QS-5u0kGAz6Px_Cu-C3o65nw04Zrsbc"
);

export async function getFile() {
  const { data } = supabase.storage
    .from("Images")
    .getPublicUrl("Screenshot from 2024-06-24 19-29-29.png");

  return data;
}
