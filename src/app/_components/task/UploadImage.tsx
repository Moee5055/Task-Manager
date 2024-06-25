"use client";
import { useState } from "react";
import { FileButton, Button, Group, Text } from "@mantine/core";
import { FaImage } from "react-icons/fa6";

export function ImageUpload() {
  const [files, setFiles] = useState<File[]>([]);
  return (
    <>
      <Group justify="center">
        <FileButton onChange={setFiles} accept="image/png,image/jpeg" multiple>
          {(props) => (
            <Button {...props}>
              <FaImage className="text-muted-foreground h-5 w-5" />
            </Button>
          )}
        </FileButton>
      </Group>

      {files.length > 0 && (
        <Text size="sm" mt="sm">
          Picked files:
        </Text>
      )}

      <ul>
        {files.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    </>
  );
}
