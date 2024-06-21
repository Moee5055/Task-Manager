"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const EditModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="absolute inset-0 bg-black/30 z-40">
      <div className="h-full flex justify-center items-center z-45">
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-black" onClick={onClose}>
              moee
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default EditModal;
