"use client";
import React from "react";
import { SanityValues } from "../../../../sanity.config";
import Article from "./Article";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  project: SanityValues["project"];
}

const ProjectView = ({ project }: Props) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="w-full h-full max-w-[100%] flex flex-col gap-8 pr-2 overflow-y-auto custom-scrollbar"
        >
          <Article currentProject={project} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectView;
