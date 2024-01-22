import Landing from "@/components/Landing";
import getData from "@/utils/getData";
import { sanityFetch } from "../../../sanity/lib/client";
import { landingContentQuery, projectsQuery } from "../../../sanity/lib/query";
import { SanityValues } from "../../../sanity.config";

export default async function Home() {
  // const { projects, landingContent } = await getData();
  const projects: SanityValues["project"][] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });
  const landingContent: SanityValues["landingContent"][] = await sanityFetch({
    query: landingContentQuery,
    tags: ["landingContent"],
  });

  return <Landing projects={projects} landingContent={landingContent[0]} />;
}
