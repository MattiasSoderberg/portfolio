import { Metadata } from "next";
import "./globals.css";
import { Quicksand } from "next/font/google";
import Navigation from "@/components/Navigation";
import ContextProvider from "@/context";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattias Söderberg | Full Stack Developer",
  description: "Mattias Söderberg's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="w-screen h-screen flex flex-col overflow-hidden">
        <ContextProvider>
          <Navigation />
          {children}
        </ContextProvider>
      </body>
    </html>
  );
}
