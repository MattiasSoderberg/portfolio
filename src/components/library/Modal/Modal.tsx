import React from "react";
import ContactContent from "./ContactContent";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { IoCloseOutline } from "react-icons/io5";
import useClickOutside from "@/hooks/useClickOutside";
import useModal from "@/hooks/useModal";
import ProjectView from "./ProjectView";

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

  return (
    <div className="w-screen h-screen bg-bgModalOverlay flex justify-center items-center absolute top-0 left-0 z-20">
      <section
        ref={ref}
        className={`w-fit h-fit relative bg-darkMain rounded p-12 modal-shadow ${modalShadows[content]}`}
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
      </section>
    </div>
  );
};

export default Modal;
