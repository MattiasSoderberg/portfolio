"use client";
import React, { createContext, useContext, useState } from "react";
import Modal from "@/components/library/Modal/Modal";
import { AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

type ModalTypes = "contact" | "none";

interface ModalContextType {
  handleOnOpen: (content: ModalTypes) => void;
  handleOnClose: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  handleSetPageLoaded: () => void;
  projects: SanityValues["project"][];
  handleSetProjects: (projects: SanityValues["project"][]) => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);

export const useModalContext = () => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error(
      "useModalContext has to be used in <ModalContext.Provider>"
    );
  }

  return modalContext;
};

export const ModalProvider = ({ children }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalTypes>("none");
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [projects, setProjects] = useState<SanityValues["project"][]>([]);

  const handleOnOpen = (content: ModalTypes): void => {
    setIsModalOpen(true);
    setModalType(content);
  };

  const handleOnClose = (): void => {
    setIsModalOpen(false);
    setModalType("none");
  };

  const handleSetPageLoaded = (): void => {
    setIsPageLoaded(true);
  };

  const handleSetProjects = (): void => {
    setProjects(projects);
  };

  const value = {
    handleOnOpen,
    handleOnClose,
    isModalOpen,
    isPageLoaded,
    handleSetPageLoaded,
    projects,
    handleSetProjects,
  };

  return (
    <ModalContext.Provider value={value}>
      <AnimatePresence>
        {isModalOpen && <Modal modalType={modalType} />}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  );
};
