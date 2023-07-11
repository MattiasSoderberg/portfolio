"use client";
import React from "react";
import { motion } from "framer-motion";
import ContainerWBackground from "./library/Containers/ContainerWBackground";
import { H1, H2 } from "./library/Typography";
import Corner, { POSITIONS } from "./library/Corner";
import ContentContainer from "./library/Containers/ContentContainer";
import Avatar from "./library/SVG/Avatar";
import Divider from "./library/Divider";
import ProjectList from "./library/Projects/ProjectList";
import { SanityDocument } from "next-sanity";
import { useProjectContext } from "@/context/ProjectContext";

interface Props {
  projects: SanityDocument[];
  landingContent: SanityDocument;
}

const Landing = ({ projects, landingContent: landingContent }: Props) => {
  const { handleSetProjectList } = useProjectContext();
  handleSetProjectList(projects);

  return (
    <ContainerWBackground>
      <ContentContainer>
        <motion.div
          className="w-full h-full relative"
          initial={{ width: "500px", height: "500px" }}
          animate={{ width: "100%", height: "100%" }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Corner position={POSITIONS.topLeft} />
          <Corner position={POSITIONS.topRight} />
          <motion.div
            className="w-[500px] h-[500px] p-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <Avatar color="thirdMain" />
          </motion.div>
          <motion.div
            className="w-full h-full flex justify-between gap-16 p-32 md:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.5 }}
          >
            <div className="w-fit h-full flex flex-col gap-6 z-10">
              <H1>{landingContent?.heading}</H1>
              <H2>{landingContent?.subheading}</H2>
            </div>
            {/* <div className="w-fit h-full flex gap-20 z-10"> */}
            <Divider />
            <div className="flex flex-col gap-8">
              <H2>Projects</H2>
              <ProjectList />
            </div>
            {/* </div> */}
          </motion.div>
          <Corner position={POSITIONS.bottomLeft} />
          <Corner position={POSITIONS.bottomRight} />
        </motion.div>
      </ContentContainer>
    </ContainerWBackground>
  );
};

export default Landing;
