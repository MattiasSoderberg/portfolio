import React, { useState } from "react";
import { useModalContext } from "@/context/ModalContext";

type ContentType = "contact" | "projects" | "none";

const useModal = () => {
  // const { handleOnOpen, handleOnClose } = useModalContext()
  const modalContext = useModalContext()

  const openModal = (content: ContentType) => {
    modalContext?.handleOnOpen(content);
  };

  const closeModal = () => {
    modalContext?.handleOnClose();
  };



  return { openModal, closeModal };
};

export default useModal;
