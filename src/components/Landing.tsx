"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { H1, H2, TextLarge } from "./library/Typography";
import Divider from "./library/Divider";
import ProjectList from "./library/Projects/ProjectList";
import LandingFooter from "./library/LandingFooter";
import { SanityValues } from "../../sanity.config";
import { useModalContext } from "@/context/ModalContext";

interface Props {
  projects: SanityValues["project"][];
  landingContent: SanityValues["landingContent"];
}

type Animation = "parent" | "child" | "text" | "divider" | "noAnimation";

const Landing = ({ projects, landingContent }: Props) => {
  const { isPageLoaded, handleSetPageLoaded } = useModalContext();

  const getAnimation = (type: Animation) => {
    const parentVariants = {
      initial: { opacity: 0 },
      visible: { opacity: 1 },
    };
    const childVariants = {
      initial: { opacity: 0 },
      visible: { opacity: 1 },
    };
    const textVariants = {
      initial: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    };
    const dividerVariants = {
      initial: { height: "0" },
      visible: { height: "100%" },
    };
    const noAnimation = {
      initial: { opacity: 1 },
      visible: { opacity: 1 },
    };
    switch (type) {
      case "parent":
        if (!isPageLoaded) {
          return parentVariants;
        } else {
          return childVariants;
        }
      case "child":
        return childVariants;
      case "text":
        if (!isPageLoaded) {
          return textVariants;
        } else {
          return childVariants;
        }
      case "divider":
        if (!isPageLoaded) {
          return dividerVariants;
        } else {
          dividerVariants.initial.height = "100%";
          return dividerVariants;
        }
      case "noAnimation":
        return noAnimation;
    }
  };

  const getTransition = (type: Animation) => {
    const transition = { duration: 0.3 };
    switch (type) {
      case "parent":
        if (!isPageLoaded) {
          return { duration: 0.3, staggerChildren: 0.4 };
        } else {
          return transition;
        }
      case "child":
        return transition;
      case "text":
        if (!isPageLoaded) {
          return transition;
        } else {
          return transition;
        }
    }
  };

  useEffect(() => {
    return () => {
      handleSetPageLoaded();
    };
  }, []);

  return (
    <>
      <motion.div
        className="w-fit h-full flex flex-col justify-between pr-0 overflow-y-auto lg:pr-8 2xl:pr-16"
        variants={getAnimation("parent")}
        transition={getTransition("parent")}
      >
        <div className="flex flex-col gap-6 lg:gap-8 xl:gap-10">
          <motion.div
            variants={getAnimation("text")}
            transition={{ duration: 0.4 }}
          >
            <H1>{landingContent?.heading}</H1>
          </motion.div>
          <motion.div
            variants={getAnimation("text")}
            transition={{ duration: 0.4 }}
          >
            <H2 color="firstLighter">{landingContent?.subheading}</H2>
          </motion.div>
          <motion.div
            variants={getAnimation("text")}
            transition={{ duration: 0.4 }}
          >
            <TextLarge color="lightMain">{landingContent?.text}</TextLarge>
          </motion.div>
        </div>
        <motion.div
          variants={getAnimation("child")}
          transition={{ duration: 0.4 }}
        >
          <LandingFooter document={landingContent} />
        </motion.div>
      </motion.div>

      <div className="hidden gap-8 xl:gap-16 md:flex">
        <motion.div
          variants={getAnimation("divider")}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Divider />
        </motion.div>
        <motion.div
          variants={
            !isPageLoaded ? getAnimation("child") : getAnimation("noAnimation")
          }
          transition={{ duration: 0.4, staggerChildren: 0.3 }}
        >
          <ProjectList projects={projects} />
        </motion.div>
      </div>
    </>
  );
};

export default Landing;
