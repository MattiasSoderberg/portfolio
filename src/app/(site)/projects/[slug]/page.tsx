import Projects from "@/components/library/Projects/Projects";
import { TextRegular } from "@/components/library/Typography";
import getData from "@/utils/getData";
import { SanityValues } from "../../../../../sanity.config";
import { sanityFetch } from "../../../../../sanity/lib/client";
import { projectsQuery } from "../../../../../sanity/lib/query";

export default async function Page() {
  // const { projects } = await getData();
  const projects: SanityValues["project"][] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });
  return <Projects projects={projects} />;
}

export async function generateStaticParams() {
  const { projects } = await getData();
  return projects.map((project) => ({
    slug: project?.slug?.current as string,
  }));
}
