import Projects from "@/components/library/Projects/Projects";
import { TextRegular } from "@/components/library/Typography";
import getData from "@/utils/getData";

export default async function Page() {
  const { projects } = await getData();
  return projects.length > 0 ? (
    <Projects projects={projects} />
  ) : (
    <TextRegular>Loading projects...</TextRegular>
  );
}

export async function generateStaticParams() {
  const { projects } = await getData();
  return projects.map((project) => ({
    slug: project?.slug?.current as string,
  }));
}
