import React, { useState, useEffect } from "react";
import ProjectList from "../Projects/ProjectList";
import getData from "@/utils/getData";
import { SanityValues } from "../../../../sanity.config";
import Divider from "../Divider";
import NextLink from "../NextLink";
import { TextRegular } from "../Typography";

const MenuContent = () => {
  const [projects, setProjects] = useState<SanityValues["project"][]>([]);

  useEffect(() => {
    (async () => {
      const data = await getData();
      if (data) {
        setProjects(data?.projects);
      }
    })();
  }, []);

  return (
    <div className="w-fit h-full flex flex-col gap-8">
      {projects.length > 0 ? (
        <ProjectList projects={projects} />
      ) : (
        <TextRegular>Loading...</TextRegular>
      )}
      <div className="flex flex-col gap-4">
        <Divider horizontal wide={false} color="projects" />
        <NextLink href="/" ariaLabel="Back to home">
          Home
        </NextLink>
      </div>
    </div>
  );
};

export default MenuContent;
