import React from "react";
import { H2 } from "../Typography";
import Divider from "../Divider";
import Article from "../Projects/Article";
import ProjectList from "../Projects/ProjectList";

const ProjectView = () => {
  return (
    <div className="w-[1200px] h-[800px] flex flex-col gap-8 bg-darkMain rounded">
      <H2 size="5xl">Projects</H2>
      <div className="w-full h-full flex gap-8 overflow-hidden">
        <ProjectList />
        <Divider wide={false} />
        <Article />
      </div>
    </div>
  );
};

export default ProjectView;
