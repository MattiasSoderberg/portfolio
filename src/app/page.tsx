import Navigation from "@/components/Navigation";
import Landing from "../components/Landing";
import ContextProvider from "@/context";
import { client } from "../../sanity/lib/client";

async function getData() {
  const projects = await client.fetch(`*[_type == "project"]`);
  const landingContent = await client.fetch(`*[_type == "landingContent"]`);

  return { projects, landingContent };
}

export default async function Home() {
  const { projects, landingContent } = await getData();

  return (
    <div className="w-screen h-screen flex flex-col relative">
      <ContextProvider>
        <Navigation />
        <main className="w-full h-full flex justify-center bg-darkMain overflow-hidden">
          <Landing projects={projects} landingContent={landingContent[0]} />
        </main>
      </ContextProvider>
    </div>
  );
}
