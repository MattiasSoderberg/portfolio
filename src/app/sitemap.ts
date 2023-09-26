import getData from "@/utils/getData";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { projects } = await getData();
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
