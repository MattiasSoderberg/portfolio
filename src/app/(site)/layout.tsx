import { Metadata } from "next";
import "../globals.css";
import { Quicksand } from "next/font/google";
import Navigation from "@/components/Navigation";
import ContentContainer from "@/components/library/Containers/ContentContainer";
import { ModalProvider } from "@/context/ModalContext";
import { Analytics } from "@vercel/analytics/react";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattias Söderberg | Full Stack Developer",
  description: "Mattias Söderberg's Portfolio",
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={quicksand.className}>
      <body className="w-screen h-screenDynamic flex flex-col items-start overflow-hidden relative">
        <ModalProvider>
          <Navigation />
          <main className="w-full h-full flex flex-col items-center bg-darkMain overflow-hidden">
            <ContentContainer>{children}</ContentContainer>
          </main>
        </ModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
