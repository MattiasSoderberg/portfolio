"use client";
import React, { createContext, useContext, useState } from "react";
import Modal from "@/components/library/Modal/Modal";
import { AnimatePresence } from "framer-motion";
import Drawer from "@/components/library/Modal/Drawer";

interface Props {
  children: React.ReactNode;
}

type ModalTypes = "contact" | "menu" | "none";

interface ModalContextType {
  handleOnOpen: (content: ModalTypes) => void;
  handleOnClose: () => void;
  isModalOpen: boolean;
  isPageLoaded: boolean;
  handleSetPageLoaded: () => void;
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

  const value = {
    handleOnOpen,
    handleOnClose,
    isModalOpen,
    isPageLoaded,
    handleSetPageLoaded,
  };

  return (
    <ModalContext.Provider value={value}>
      <AnimatePresence>
        {isModalOpen && modalType != "menu" && <Modal modalType={modalType} />}
        {isModalOpen && modalType == "menu" && <Drawer />}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  );
};
