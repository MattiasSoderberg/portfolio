import React, { createContext, useContext, useState } from "react";
import type { SanityDocument } from "sanity";

interface Props {
  children: React.ReactNode;
}

interface ProjectContextType {
  projects: SanityDocument[];
  handleSetProjectList: (projects: SanityDocument[]) => void;
  currentProject: SanityDocument;
  handleSetCurrentProject: (project: SanityDocument) => void;
}

export const ProjectContext = createContext<ProjectContextType | null>(null);

export const useProjectContext = () => {
  const projectContext = useContext(ProjectContext);

  if (!projectContext) {
    throw new Error(
      "useProjectContext has to be used in <ProjectContext.Provider>"
    );
  }

  return projectContext;
};

export const ProjectProvider = ({ children }: Props) => {
  const [projects, setProjects] = useState<SanityDocument[]>([]);
  const [currentProject, setCurrentProject] = useState<SanityDocument>(
    {} as SanityDocument
  );

  const handleSetProjectList = (projects: SanityDocument[]) => {
    setProjects(projects);
  };

  const handleSetCurrentProject = (project: SanityDocument): void => {
    setCurrentProject(project);
  };

  const value = {
    projects,
    handleSetProjectList,
    currentProject,
    handleSetCurrentProject,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};
