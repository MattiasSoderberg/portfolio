"use client";
import { useParams } from "next/navigation";
import React from "react";
import ProjectList from "./ProjectList";
import Divider from "../Divider";
import Article from "./Article";
import { SanityValues } from "../../../../sanity.config";

interface Props {
  projects: SanityValues["project"][];
}

const Projects = ({ projects }: Props) => {
  const params = useParams();
  const { slug } = params;
  const currentProject = projects.find(
    (project) => project?.slug?.current === slug
  );

  return (
    <>
      <Article currentProject={currentProject as SanityValues["project"]} />
      <div className="hidden gap-8 xl:gap-16 md:flex">
        <Divider color="projects" />
        <ProjectList projects={projects} />
      </div>
    </>
  );
};

export default Projects;
