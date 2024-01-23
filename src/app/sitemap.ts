import { MetadataRoute } from "next";
import { sanityFetch } from "../../sanity/lib/client";
import { projectsQuery } from "../../sanity/lib/query";
import { SanityValues } from "../../sanity.config";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects: SanityValues["project"][] = await sanityFetch({
    query: projectsQuery,
    tags: ["project"],
  });
  const siteProjects = projects.map((project) => ({
    url: `${process.env.PRODUCTION_URL as string}/${project?.slug?.current}`,
    lastModified: project._updatedAt,
  }));

  return [
    {
      url: process.env.PRODUCTION_URL as string,
      lastModified: new Date(),
    },
    ...siteProjects,
  ];
}
