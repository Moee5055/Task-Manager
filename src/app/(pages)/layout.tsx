import SideBar from "../_components/sidebar/Sidebar";
import Header from "../_components/header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="h-screen relative flex sm:py-4 sm:gap-4">
          <SideBar />
          <main
            className="h-full w-full rounded-lg shadow-lg bg-secondary
    dark:bg-secondary pb-4 overflow-y-auto">
            <Header />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
