// "use client";

import { Metadata } from "next";
import "./globals.css";
// import ContextProvider from "@/context";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({ subsets: ["latin"] });

// const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Mattias Söderberg | Full Stack Developer",
//   description: "Portfolio site",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      {/* <ContextProvider> */}
      <body>{children}</body>
      {/* </ContextProvider> */}
    </html>
  );
}
