import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import NextTopLoader from "nextjs-toploader";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

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
          <body className={font.className}>
            <MantineProvider>
              <NextTopLoader showSpinner={false} />
              {children}
            </MantineProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
