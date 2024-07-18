"use client";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { FaImage } from "react-icons/fa6";
import { uploadFile } from "@/utils/fileupload";
import { useRouter } from "next/navigation";

type Props = {
  id: string;
  setIsLoading: (isLoading: boolean) => void;
};

export function ImageUpload({ id, setIsLoading }: Props) {
  const router = useRouter();

  async function handleFileChange(selectedFile: File[] | null) {
    if (selectedFile) {
      try {
        setIsLoading(true);
        const file = selectedFile;
        await uploadFile(file, id);
        router.refresh();
        setIsLoading(false);
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
