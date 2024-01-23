import Projects from "@/components/library/Projects/Projects";
import { SanityValues } from "../../../../sanity.config";
import { sanityFetch } from "../../../../sanity/lib/client";
import { projectsQuery } from "../../../../sanity/lib/query";

export default async function ProjectsPage() {
  const projects: SanityValues["project"][] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });

  return <Projects projects={projects} />;
}
