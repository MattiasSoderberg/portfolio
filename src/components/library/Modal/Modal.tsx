import React from "react";
import ContactContent from "./ContactContent";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { IoCloseOutline } from "react-icons/io5";
import useClickOutside from "@/hooks/useClickOutside";
import useModal from "@/hooks/useModal";
import ProjectView from "./ProjectView";
import { motion } from "framer-motion";

interface Props {
  content: string;
}

const Modal = ({ content }: Props) => {
  const { closeModal } = useModal();
  const ref = useClickOutside(closeModal);
  const modalTypes: { [key: string]: JSX.Element | null } = {
    contact: <ContactContent />,
    projects: <ProjectView />,
    none: null,
  };
  const modalShadows: { [key: string]: string } = {
    contact: "shadow-thirdLight",
    projects: "shadow-secondMain",
  };

  const modalContent = modalTypes[content];

  const variants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delayChildren: 0.15,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.15,
      },
    },
  };

  return (
    <motion.div
      className="w-screen h-screen bg-bgModalOverlay flex justify-center items-center absolute top-0 left-0 z-20"
      variants={variants}
      initial="initial"
      animate="visible"
      exit="exit"
      key="modal-overlay"
    >
      <motion.section
        ref={ref}
        className={`w-full h-full relative bg-darkMain rounded p-6 md:p-12 modal-shadow ${modalShadows[content]} sm:w-fit sm:h-fit`}
        variants={variants}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        key="modal"
      >
        <div className="absolute top-5 right-5 bg-[#363738]">
          <ButtonNaked
            onClick={closeModal}
            borders="border border-1 border-lightMain"
            hovers="hover:bg-darkLight"
          >
            <IoCloseOutline />
          </ButtonNaked>
        </div>
        {modalContent}
      </motion.section>
    </motion.div>
  );
};

export default Modal;
