"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { H1, H2, TextLarge } from "./library/Typography";
import Corner, { POSITIONS } from "./library/Corner";
import ContentContainer from "./library/Containers/ContentContainer";
import Avatar from "./library/SVG/Avatar";
import Divider from "./library/Divider";
import ProjectList from "./library/Projects/ProjectList";
import { SanityDocument } from "next-sanity";
import { useProjectContext } from "@/context/ProjectContext";
import LandingFooter from "./library/LandingFooter";

interface Props {
  projects: SanityDocument[];
  landingContent: SanityDocument;
}

const Landing = ({ projects, landingContent }: Props) => {
  const { handleSetProjectList } = useProjectContext();

  const parentVariants = {
    initial: { width: "500px", height: "500px" },
    visible: {
      width: "100%",
      height: "100%",
      transition: {
        delay: 2,
        duration: 0.8,
        staggerChildren: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const avatarVariant = {
    initial: { opacity: 1 },
    visible: { opacity: 0.05 },
  };

  const textVariants = {
    initial: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    handleSetProjectList(projects);
  }, []);

  return (
    <ContentContainer>
      <motion.div
        className="w-[500px] h-[500px] p-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 -mt-7 z-0"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 0.9, delay: 1.8 }}
      >
        <Avatar color="thirdMain" />
      </motion.div>
      <motion.div
        className="w-full h-full relative"
        variants={parentVariants}
        initial="initial"
        animate="visible"
      >
        <Corner position={POSITIONS.topLeft} />
        <Corner position={POSITIONS.topRight} />
        <motion.div
          className="w-full h-full flex justify-between gap-4 p-7 z-10 md:gap-8 2xl:gap-16 sm:p-12 lg:p-20 3xl:p-28"
          variants={childVariants}
          transition={{ duration: 0.7, staggerChildren: 0.7 }}
        >
          <motion.div
            className="w-fit h-full flex flex-col justify-between p-0 lg:pr-8 2xl:pr-16"
            variants={childVariants}
            transition={{ duration: 0.3, staggerChildren: 0.4 }}
          >
            <div className="flex flex-col gap-6 sm:gap-10">
              <motion.div
                variants={childVariants}
                transition={{ duration: 0.4 }}
              >
                <H1>{landingContent?.heading}</H1>
              </motion.div>
              <motion.div
                variants={textVariants}
                transition={{ duration: 0.4 }}
              >
                <H2 color="firstLighter">{landingContent?.subheading}</H2>
              </motion.div>
              <motion.div
                variants={textVariants}
                transition={{ duration: 0.4 }}
              >
                <TextLarge color="lightMain">{landingContent?.text}</TextLarge>
              </motion.div>
            </div>
            <motion.div
              // className="sm:mt-auto"
              variants={textVariants}
              transition={{ duration: 0.4 }}
            >
              <LandingFooter document={landingContent} />
            </motion.div>
          </motion.div>

          <div className="hidden gap-8 xl:gap-16 md:flex">
            <motion.div
              variants={{
                initial: { height: 0 },
                visible: { height: "100%" },
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Divider />
            </motion.div>
            <motion.div
              className="flex flex-col gap-8"
              variants={childVariants}
              transition={{ duration: 0.4 }}
            >
              <H2>Projects</H2>
              <ProjectList />
            </motion.div>
          </div>
        </motion.div>
        <Corner position={POSITIONS.bottomLeft} />
        <Corner position={POSITIONS.bottomRight} />
      </motion.div>
    </ContentContainer>
  );
};

export default Landing;
