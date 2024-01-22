import React from "react";
import ContactContent from "./ContactContent";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { IoCloseOutline } from "react-icons/io5";
import useClickOutside from "@/hooks/useClickOutside";
import useModal from "@/hooks/useModal";
import { motion } from "framer-motion";

interface Props {
  modalType: string;
}

const Modal = ({ modalType }: Props) => {
  const { closeModal } = useModal();
  const ref = useClickOutside(closeModal);
  const modalTypes: { [key: string]: JSX.Element | null } = {
    contact: <ContactContent />,
    none: null,
  };
  const modalShadows: { [key: string]: string } = {
    contact: "shadow-thirdLight",
    projects: "shadow-secondMain",
  };

  const content = modalTypes[modalType];

  const variants = {
    initial: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        delayChildren: 0.05,
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
      className="w-full h-full bg-bgModalOverlay flex flex-col items-center absolute top-0 right-0 bottom-0 left-0 z-20 pt-[70px] 3xl:pt-[100px]"
      variants={variants}
      initial="initial"
      animate="visible"
      exit="exit"
      key="modal-overlay"
    >
      <div className="w-full h-full max-w-screen-3xl max-h-screen-3xl flex justify-center items-center p-0 md:py-16">
        <motion.section
          ref={ref}
          className={`w-full h-fit max-h-full relative bg-darkMain rounded-sm p-6 sm:p-8 sm:modal-shadow ${modalShadows[modalType]} overflow-y-auto custom-scrollbar sm:w-fit`}
          variants={variants}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          key="modal"
        >
          <div className="absolute top-6 right-6">
            <ButtonNaked
              onClick={closeModal}
              borders="border border-1 border-lightMain"
              background="bg-darkLight"
              hovers="hover:bg-darkLighter"
            >
              <IoCloseOutline />
            </ButtonNaked>
          </div>
          {content}
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Modal;
