import React from "react";
import { SanityValues } from "../../../../sanity.config";
import NextLink from "../NextLink";
import { H2 } from "../Typography";

interface Props {
  projects: SanityValues["project"][];
  rightPadding?: boolean;
}

const ProjectList = ({ projects, rightPadding = false }: Props) => {
  return (
    <div className="flex flex-col gap-8">
      <H2>Projects</H2>
      <ul className="min-w-max h-full flex flex-col gap-4 overflow-y-scroll z-10">
        {projects.length > 0 &&
          projects.map((project) => (
            <li key={project?._id} className="w-max">
              <NextLink
                href={`/projects/${project?.slug?.current}`}
                as={`/projects/${project?.slug?.current}`}
              >
                {project?.title}
              </NextLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProjectList;
