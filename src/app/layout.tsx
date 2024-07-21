import { MantineProvider } from "@mantine/core";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ClerkProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <head>
            <title>Task App</title>
          </head>
          <body className={font.className}>
            <MantineProvider>
              <NextTopLoader showSpinner={false} />
              <Toaster />
              {children}
            </MantineProvider>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
