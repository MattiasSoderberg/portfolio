import React from "react";
import { ValidationError } from "yup";
import { TextRegular, TextSmall } from "../Typography";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  name: string;
  errors: ValidationError[];
  paddingBottom?: string;
}

const WrapperWErrorMsg = ({
  children,
  name,
  errors,
  paddingBottom = "7",
}: Props) => {
  const error = errors.find((error) => error?.path === name) || null;

  return (
    <div className={`w-full pb-${paddingBottom} relative`}>
      {children}
      <AnimatePresence>
        {error && (
          <motion.div
            key={name}
            className="absolute left-0 bottom-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
          >
            <TextRegular color="thirdLight">{error?.message}</TextRegular>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WrapperWErrorMsg;
