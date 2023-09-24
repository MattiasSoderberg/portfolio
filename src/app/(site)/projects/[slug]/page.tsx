import Projects from "@/components/library/Projects/Projects";
import { TextRegular } from "@/components/library/Typography";
import getData from "@/utils/getData";

export default async function Page() {
  const { projects } = await getData();
  return <Projects projects={projects} />;
}

export async function generateStaticParams() {
  const { projects } = await getData();
  return projects.map((project) => ({
    slug: project?.slug?.current as string,
  }));
}
