import React from "react";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { useProjectContext } from "@/context/ProjectContext";
import { useModalContext } from "@/context/ModalContext";
import useModal from "@/hooks/useModal";
import { SanityDocument } from "next-sanity";

interface Props {
  rightPadding?: boolean;
}

const ProjectList = ({ rightPadding = false }: Props) => {
  const { openModal } = useModal();
  const { isModalOpen } = useModalContext();
  const { handleSetCurrentProject } = useProjectContext();
  const { projects } = useProjectContext();

  const onClick = (project: SanityDocument) => {
    handleSetCurrentProject(project);
    if (!isModalOpen) {
      openModal("projects");
    }
  };

  return (
    <ul className="min-w-max h-full flex flex-col gap-4 overflow-y-scroll z-10">
      {projects.length > 0 &&
        projects.map((project) => (
          <li key={project?._id} className="w-max">
            <ButtonNaked
              fonts="text-left text-base xl:text-lg"
              onClick={() => onClick(project)}
              hovers="hover:text-lightDarker"
            >
              {project?.title as string}
            </ButtonNaked>
          </li>
        ))}
    </ul>
  );
};

export default ProjectList;
