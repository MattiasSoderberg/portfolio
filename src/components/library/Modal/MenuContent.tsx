import React, { useState, useEffect } from "react";
import ProjectList from "../Projects/ProjectList";
import getData from "@/utils/getData";
import { SanityValues } from "../../../../sanity.config";

const MenuContent = () => {
  const [projects, setProjects] = useState<SanityValues["project"][]>([]);

  useEffect(() => {
    (async () => {
      const data = await getData();
      if (data.projects.length > 0) {
        console.log("MENU CONTENT", data);
        setProjects(data.projects);
      }
    })();
  }, []);

  return (
    <div className="w-fit h-full">
      <ProjectList projects={projects} />
    </div>
  );
};

export default MenuContent;
