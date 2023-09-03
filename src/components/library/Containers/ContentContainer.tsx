"use client";

import React from "react";
import { motion } from "framer-motion";
import { POSITIONS } from "../Corner";
import Avatar from "../SVG/Avatar";
import Corner from "../Corner";
import { useParams } from "next/navigation";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  const { slug } = params;

  const parentVariants = {
    initial: { width: "var(--width-from)", height: "var(--height-from)" },
    visible: {
      width: "var(--size-to)",
      height: "var(--size-to)",
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

  return (
    <section className="w-full h-full max-w-screen-3xl max-h-screen-3xl flex flex-col justify-center items-center p-1 md:px-10 lg:px-20 2xl:px-40 md:p-16 relative">
      <motion.div
        className="w-[300px] h-[300px] p-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 lg:w-[500px] lg:h-[500px]"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.04 }}
        transition={{ duration: 0.9, delay: 1.8 }}
      >
        <Avatar color="thirdMain" />
      </motion.div>
      <motion.div
        layout
        className="[--width-from:300px] [--height-from:300px] [--size-to:100%] max-w-full relative lg:[--width-from:500px] lg:[--height-from:500px]"
        variants={parentVariants}
        initial="initial"
        animate="visible"
      >
        <Corner
          position={POSITIONS.topLeft}
          color={!!slug ? "projects" : "landing"}
        />
        <Corner
          position={POSITIONS.topRight}
          color={!!slug ? "projects" : "landing"}
        />
        <motion.div
          className="w-full h-full flex justify-between gap-4 p-7 z-10 md:gap-8 2xl:gap-16 sm:p-12 lg:p-20 3xl:p-28"
          variants={childVariants}
          transition={{ duration: 0.7, staggerChildren: 0.7 }}
        >
          {children}
        </motion.div>
        <Corner
          position={POSITIONS.bottomLeft}
          color={!!slug ? "projects" : "landing"}
        />
        <Corner
          position={POSITIONS.bottomRight}
          color={!!slug ? "projects" : "landing"}
        />
      </motion.div>
    </section>
  );
};

export default ContentContainer;
