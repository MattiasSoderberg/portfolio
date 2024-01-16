import React from "react";
import { motion } from "framer-motion";
import useModal from "@/hooks/useModal";
import useClickOutside from "@/hooks/useClickOutside";
import ButtonNaked from "../Button/variants/ButtonNaked";
import { IoCloseOutline } from "react-icons/io5";
import MenuContent from "./MenuContent";

import { SanityValues } from "../../../../sanity.config";

interface Props {
  projects: SanityValues["project"][];
  handleCloseMenu: () => void;
}

const Drawer = ({ projects, handleCloseMenu }: Props) => {
  const ref = useClickOutside(handleCloseMenu);

  const overlayVariants = {
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
  const drawerVariants = {
    initial: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    exit: { x: "-100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };
  return (
    <motion.div
      className="w-screen h-screen bg-bgModalOverlay absolute top-0 left-0 z-20"
      variants={overlayVariants}
      initial="initial"
      animate="visible"
      exit="exit"
      key="modal-overlay"
    >
      <motion.section
        ref={ref}
        className={`w-[300px] h-full absolute top-0 left-0 bg-darkMain p-6 shadow-secondMain drawer-shadow`}
        variants={drawerVariants}
        initial="initial"
        animate="visible"
        exit="exit"
        key="drawer"
      >
        <div className="absolute top-6 right-6">
          <ButtonNaked
            onClick={handleCloseMenu}
            borders="border border-1 border-lightMain"
            background="bg-darkLight"
            hovers="hover:bg-darkLighter"
          >
            <IoCloseOutline />
          </ButtonNaked>
        </div>

        <MenuContent projects={projects} onClick={handleCloseMenu} />
      </motion.section>
    </motion.div>
  );
};

export default Drawer;
