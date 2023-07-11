import React, { createContext, useContext, useState } from "react";
import Modal from "@/components/library/Modal/Modal";

interface Props {
  children: React.ReactNode;
}

type ContentType = "contact" | "projects" | "none";

interface ModalContextType {
  handleOnOpen: (content: ContentType) => void;
  handleOnClose: () => void;
  isModalOpen: boolean;
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
  const [modalContent, setModalContent] = useState<ContentType>("none");

  const handleOnOpen = (content: ContentType): void => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const handleOnClose = (): void => {
    setIsModalOpen(false);
    setModalContent("none");
  };

  const value = {
    handleOnOpen,
    handleOnClose,
    isModalOpen,
  };

  return (
    <ModalContext.Provider value={value}>
      {isModalOpen && <Modal content={modalContent} />}
      {children}
    </ModalContext.Provider>
  );
};
