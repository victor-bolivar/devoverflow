import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/lib/providers";


export const metadata: Metadata = {
  title: "DevOverflow",
  description: "Answers for (almost) any programming question.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased h-screen dark:bg-dark-100 bg-light-900`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
