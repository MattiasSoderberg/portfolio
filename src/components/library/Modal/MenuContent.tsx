import React, { useState, useEffect } from "react";
import ProjectList from "../Projects/ProjectList";
import getData from "@/utils/getData";
import { SanityValues } from "../../../../sanity.config";
import Divider from "../Divider";
import NextLink from "../NextLink";


interface Props {
  projects: SanityValues["project"][];
  onClick: () => void;
}

const MenuContent = ({ projects, onClick }: Props) => {

  return (
    <div className="w-fit h-full flex flex-col gap-8">
      <ProjectList projects={projects} onClick={onClick} />
      <div className="flex flex-col gap-4">
        <Divider horizontal wide={false} color="projects" />
        <NextLink href="/" ariaLabel="Back to home" onClick={onClick}>
          Home
        </NextLink>
      </div>
    </div>
  );
};

export default MenuContent;
