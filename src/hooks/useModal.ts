import React, { useState } from "react";
import { useModalContext } from "@/context/ModalContext";

type ContentType = "contact" | "none";

const useModal = () => {
  const modalContext = useModalContext();

  const openModal = (content: ContentType) => {
    modalContext?.handleOnOpen(content);
  };

  const closeModal = () => {
    modalContext?.handleOnClose();
  };

  return { openModal, closeModal };
};

export default useModal;
