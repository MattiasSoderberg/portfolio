import Landing from "../components/Landing";
import getData from "@/utils/getData";

export default async function Home() {
  const { projects, landingContent } = await getData();

  return <Landing projects={projects} landingContent={landingContent} />;
}
