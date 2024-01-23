"use client";
import React from "react";
import ProjectList from "./ProjectList";
import { SanityValues } from "../../../../sanity.config";

interface Props {
  projects: SanityValues["project"][];
}

const Projects = ({ projects }: Props) => {
  return (
    <div className="w-full flex">
      <ProjectList projects={projects} />
    </div>
  );
};

export default Projects;
