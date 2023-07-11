"use client";
import React from "react";
import { ModalProvider } from "./ModalContext";
import { ProjectProvider } from "./ProjectContext";

interface Props {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: Props) => {
  return (
    <ProjectProvider>
      <ModalProvider>{children}</ModalProvider>
    </ProjectProvider>
  );
};

export default ContextProvider;
