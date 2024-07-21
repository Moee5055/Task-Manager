import type { Metadata } from "next";

import { UserButton } from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Task App",
  description: "create and manage your task",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UserButton afterSignOutUrl="/sign-in" />
    </main>
  );
}
