import React from "react";
import { motion } from "framer-motion";

export const POSITIONS = {
  topLeft: "topLeft",
  topRight: "topRight",
  bottomLeft: "bottomLeft",
  bottomRight: "bottomRight",
} as const;

type Position = (typeof POSITIONS)[keyof typeof POSITIONS];
type Color = "landing" | "projects";

interface Props {
  position: Position;
  small?: boolean;
  color?: Color;
}

const Corner = ({ position, small = false, color = "landing" }: Props) => {
  const positionClasses = {
    topLeft: "top-0 left-0",
    topRight: "rotate-90 top-0 right-0",
    bottomLeft: "-rotate-90 bottom-0 left-0",
    bottomRight: "rotate-180 bottom-0 right-0",
  };

  const cornerClasses = `absolute ${positionClasses[position]}`;
  const styleClasses = `${
    color == "landing" ? "bg-firstMain" : "bg-secondMain"
  } transition-colors duration-500 ease-out rounded-s-lg overflow-hidden`;

  const variants = {
    initial: { borderRadius: "0px" },
    visible: {
      borderBottomRightRadius: "30px",
      transition: { delay: 2.5, duration: 1 },
    },
  };

  return (
    <div className={cornerClasses}>
      <motion.div
        variants={variants}
        className={`w-[150px] lg:w-[250px] h-[5px] lg:h-[8px] 2xl:h-[10px] ${styleClasses}`}
      >
        <div className="w-full h-full corner-linear-gradient-horizontal-overlay" />
      </motion.div>
      <motion.div
        variants={variants}
        className={`w-[5px] lg:w-[8px] 2xl:w-[10px] h-[145px] lg:h-[242px] 2xl:h-[240px] ${styleClasses}`}
      >
        <div className="w-full h-full corner-linear-gradient-vertical-overlay" />
      </motion.div>
    </div>
  );
  // color == "landing" ? (
  //   <div className={cornerClasses}>
  //     <motion.div
  //       variants={variants}
  //       // transition={{ duration: 0.5 }}
  //       className="w-[150px] sm:w-[250px] h-[5px] lg:h-[8px] xl:h-[10px] corner-linear-gradient-horizontal z-0 transition-colors duration-150 ease-in"
  //     />
  //     <motion.div
  //       variants={variants}
  //       // transition={{ duration: 0.5 }}
  //       className="w-[5px] lg:w-[8px] xl:w-[10px] h-[145px] lg:h-[242px] xl:h-[240px] corner-linear-gradient-vertical z-0 transition-colors duration-150 ease-in"
  //     />
  //   </div>
  // ) : (
  //   <div className={cornerClasses}>
  //     <motion.div
  //       variants={variants}
  //       // transition={{ duration: 0.5 }}
  //       className="w-[150px] sm:w-[250px] h-[5px] lg:h-[8px] xl:h-[10px] corner-linear-gradient-horizontal-green z-0 transition-colors duration-150 ease-in"
  //     />
  //     <motion.div
  //       variants={variants}
  //       // transition={{ duration: 0.5 }}
  //       className="w-[5px] lg:w-[8px] xl:w-[10px] h-[145px] lg:h-[242px] xl:h-[240px] corner-linear-gradient-vertical-green z-0 transition-colors duration-150 ease-in"
  //     />
  //   </div>
  // );
};

export default Corner;
