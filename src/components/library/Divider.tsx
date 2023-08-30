import React from "react";
import { motion } from "framer-motion";

interface Props {
  horizontal?: boolean;
  wide?: boolean;
}

const Divider = ({ horizontal = false, wide = true }: Props) => {
  const horizontalSize = wide ? "w-full h-[6px]" : "w-full h-[2px]";
  const verticalSize = wide ? "w-[6px] h-full" : "w-[2px] h-full";

  const classes = horizontal
    ? `divider-linear-gradient-horizontal ${horizontalSize}`
    : `divider-linear-gradient-vertical self-center ${verticalSize} rounded-s-lg`;
  return <motion.div className={classes} />;
};

export default Divider;
