"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { POSITIONS } from "../Corner";
import Avatar from "../SVG/Avatar";
import Corner from "../Corner";
import { useParams, usePathname } from "next/navigation";
import { useModalContext } from "@/context/ModalContext";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  const params = useParams();
  const { slug } = params;
  const { handleSetPageLoaded } = useModalContext();

  const parentVariants = {
    initial:
      path === "/"
        ? { width: "var(--width-from)", height: "var(--height-from)" }
        : { width: "var(--size-to)", height: "var(--size-to)" },
    visible: {
      width: "var(--size-to)",
      height: "var(--size-to)",
      transition: {
        delay: path === "/" ? 0.5 : 0,
        duration: 0.8,
        delayChildren: path === "/" ? 1.2 : 0,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    handleSetPageLoaded();
  }, []);

  return (
    <section className="w-full h-full max-w-screen-3xl max-h-screen-3xl flex flex-col justify-center items-center p-1 md:px-10 lg:px-20 2xl:px-40 md:p-16 relative">
      <motion.div
        className="w-[300px] h-[300px] p-10 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0 lg:w-[500px] lg:h-[500px]"
        initial={path === "/" ? { opacity: 1 } : { opacity: 0.04 }}
        animate={path === "/" && { opacity: 0.04 }}
        transition={{ duration: 0.9, delay: 0.5 }}
      >
        <Avatar color="thirdMain" />
      </motion.div>
      <motion.div
        layout
        className="[--width-from:300px] [--height-from:300px] [--size-to:100%] max-w-full relative lg:[--width-from:500px] lg:[--height-from:500px]"
        variants={parentVariants}
        initial="initial"
        animate={path === "/" && "visible"}
      >
        <div className="w-full h-full flex justify-between gap-4 p-7 z-10 md:gap-8 2xl:gap-16 sm:p-12 lg:p-20 3xl:p-28">
          {children}
        </div>
        <Corner
          position={POSITIONS.topLeft}
          color={!!slug ? "projects" : "landing"}
        />
        <Corner
          position={POSITIONS.topRight}
          color={!!slug ? "projects" : "landing"}
        />
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
