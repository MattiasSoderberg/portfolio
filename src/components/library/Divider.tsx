"use client";
import React from "react";
import { motion } from "framer-motion";

type Color = "landing" | "projects";

interface Props {
  horizontal?: boolean;
  wide?: boolean;
  color?: Color;
}

const Divider = ({
  horizontal = false,
  wide = true,
  color = "landing",
}: Props) => {
  const horizontalSize = wide ? "w-full h-[4px] lg:h-[6px]" : "w-full h-[2px]";
  const verticalSize = wide ? "w-[4px] lg:w-[6px] h-full" : "w-[2px] h-full";

  const styleClasses = `${
    color == "landing" ? "bg-firstMain" : "bg-secondMain"
  } rounded-s-lg transition-colors duration-500 ease-out overflow-hidden`;

  return (
    <motion.div
      className={`${
        horizontal ? horizontalSize : verticalSize
      } ${styleClasses}`}
    >
      <div
        className={`w-full h-full ${
          horizontal
            ? "divider-linear-gradient-horizontal-overlay"
            : "divider-linear-gradient-vertical-overlay"
        }`}
      />
    </motion.div>
  );
};

export default Divider;
