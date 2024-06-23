import { Poppins } from "next/font/google";
import SideBar from "../_components/sidebar/Sidebar";
import Header from "../_components/header/Header";
import { ThemeProvider } from "../theme_provider";

const font = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
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
      </body>
    </html>
  );
}
