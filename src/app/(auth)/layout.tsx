export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main
          className="h-screen flex justify-center items-center 
      bg-gradient-to-r from-black to-transparent">
          {children}
        </main>
      </body>
    </html>
  );
}
