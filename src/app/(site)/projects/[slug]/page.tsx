import Projects from "@/components/library/Projects/Projects";
import { TextRegular } from "@/components/library/Typography";
import { SanityValues } from "../../../../../sanity.config";
import { sanityFetch } from "../../../../../sanity/lib/client";
import {
  oneProjectQuery,
  projectsQuery,
} from "../../../../../sanity/lib/query";
import ProjectView from "@/components/library/Projects/ProjectView";

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project: SanityValues["project"] = await sanityFetch({
    query: oneProjectQuery,
    tags: ["project"],
    qParams: { slug: params.slug },
  });
  return <ProjectView project={project} />;
}

export async function generateStaticParams() {
  const projects: SanityValues["project"][] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });
  return projects.map((project) => ({
    slug: project?.slug?.current as string,
  }));
}
