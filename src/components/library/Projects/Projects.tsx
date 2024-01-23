"use client";
import React from "react";
import { SanityValues } from "../../../../sanity.config";
import { H1 } from "../Typography";
import Article from "./Article";

interface Props {
  project: SanityValues["project"];
}

const Projects = ({ project }: Props) => {
  return (
    <div className="w-full flex flex-col">
      {project ? <Article currentProject={project} /> : <H1>Projects</H1>}
    </div>
  );
};

export default Projects;
