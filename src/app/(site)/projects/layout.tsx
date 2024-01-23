import Divider from "@/components/library/Divider";
import ProjectList from "@/components/library/Projects/ProjectList";
import { SanityValues } from "../../../../sanity.config";
import { sanityFetch } from "../../../../sanity/lib/client";
import { projectsQuery } from "../../../../sanity/lib/query";

export default async function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const projects: SanityValues["project"][] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });
  return (
    <>
      {children}
      <div className="hidden gap-8 xl:gap-16 md:flex">
        <Divider color="projects" />
        <ProjectList projects={projects} />
      </div>
    </>
  );
}
