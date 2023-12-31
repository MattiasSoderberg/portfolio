import { Metadata } from "next";
import "../globals.css";
import { Quicksand } from "next/font/google";
import Navigation from "@/components/Navigation";
import ContentContainer from "@/components/library/Containers/ContentContainer";
import { ModalProvider } from "@/context/ModalContext";
import { Analytics } from "@vercel/analytics/react";
import getData from "@/utils/getData";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattias Söderberg | Full Stack Developer",
  description: "Mattias Söderberg's Portfolio",
  icons: { icon: "/icon.svg" },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { projects } = await getData();
  return (
    <html lang="en" className={quicksand.className}>
      <body className="w-screen h-screenSmall flex flex-col items-start relative overflow-hidden">
        <ModalProvider>
          <Navigation projects={projects} />
          <main className="w-full h-full flex flex-col items-center bg-darkMain overflow-hidden">
            <ContentContainer>{children}</ContentContainer>
          </main>
        </ModalProvider>
        <Analytics />
      </body>
    </html>
  );
}
