"use client";
import React from "react";
import { SanityValues } from "../../../../sanity.config";
import NextLink from "../NextLink";
import { H2 } from "../Typography";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useModalContext } from "@/context/ModalContext";

interface Props {
  projects: SanityValues["project"][];
  rightPadding?: boolean;
  onClick?: () => void;
}

const ProjectList = ({ projects, rightPadding = false, onClick }: Props) => {
  const path = usePathname();
  const { isPageLoaded } = useModalContext();
  const variants = {
    initial: !isPageLoaded && path === "/" ? { opacity: 0 } : { opacity: 1 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      variants={variants}
      transition={{ duration: 0.3, staggerChildren: 0.3 }}
      className="flex flex-col gap-8"
    >
      <H2>Projects</H2>
      <motion.ul
        variants={variants}
        transition={{ staggerChildren: 0.2, duration: 0.2, ease: "easeOut" }}
        className="min-w-max h-full flex flex-col gap-4 overflow-y-auto z-10"
      >
        {projects.length > 0 &&
          projects.map((project) => (
            <motion.li variants={variants} key={project?._id} className="w-max">
              <NextLink
                href={`/projects/${project?.slug?.current}`}
                onClick={onClick}
              >
                {project?.title}
              </NextLink>
            </motion.li>
          ))}
      </motion.ul>
    </motion.div>
  );
};

export default ProjectList;
