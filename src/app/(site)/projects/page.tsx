import Projects from "@/components/library/Projects/Projects";
import { SanityValues } from "../../../../sanity.config";
import { sanityFetch } from "../../../../sanity/lib/client";
import { projectRootQuery } from "../../../../sanity/lib/query";

export default async function ProjectsPage() {
  const project: SanityValues["project"] = await sanityFetch({
    query: projectRootQuery,
    tags: ["project"],
  });

  return <Projects project={project} />;
}
