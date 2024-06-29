"use client";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { FaImage } from "react-icons/fa6";
import useFileState from "@/store/useImage";
import { uploadFile } from "@/utils/fileupload";

export function ImageUpload({ id }: { id: string }) {
  async function handleFileChange(selectedFile: File[] | null) {
    if (selectedFile) {
      try {
        const file = selectedFile;
        await uploadFile(file, id);
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
