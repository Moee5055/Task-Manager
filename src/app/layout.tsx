import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";

import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Task Manager",
  description: "create and manage your task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <head />
          <body>
            <MantineProvider>{children}</MantineProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
