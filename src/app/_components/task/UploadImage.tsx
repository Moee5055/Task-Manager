"use client";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { FaImage } from "react-icons/fa6";
import { uploadFile } from "@/utils/fileupload";
import { useRouter } from "next/navigation";

export function ImageUpload({ id }: { id: string }) {
  const router = useRouter();

  async function handleFileChange(selectedFile: File[] | null) {
    if (selectedFile) {
      try {
        const file = selectedFile;
        await uploadFile(file, id);
        router.refresh();
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <>
      <Group justify="center">
        <FileButton
          onChange={handleFileChange}
          accept="image/png,image/jpeg"
          multiple>
          {(props) => (
            <Button {...props}>
              <FaImage className="text-muted-foreground h-5 w-5 relative top-[3px]" />
            </Button>
          )}
        </FileButton>
      </Group>
    </>
  );
}
