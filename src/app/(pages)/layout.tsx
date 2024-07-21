import SideBar from "../_components/sidebar/Aside";
import Header from "../_components/header/Header";
import { ThemeProvider } from "../theme_provider";

import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange>
      <div className="h-screen relative flex sm:p-4 sm:gap-4">
        <SideBar />
        <main
          className="h-full w-full sm:rounded-lg shadow-lg bg-zinc-300/50
            dark:bg-secondary pb-4 overflow-y-auto">
          <Header />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
