"use client";
import React from "react";
import { motion } from "framer-motion";
import Avatar from "./library/SVG/Avatar";
import { IoMailOutline, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Link from "./library/Link";
import ButtonNaked from "./library/Button/variants/ButtonNaked";
import SVGGradientWrapper from "./library/SVG/SVGGradientWrapper";
import useModal from "@/hooks/useModal";

const Navigation = () => {
  const { openModal } = useModal();

  const handleOnMailClick = () => {
    openModal("contact");
  };

  return (
    <nav className="w-full h-navHeight bg-bgDarkMain flex justify-center items-center xl:h-[100px]">
      <div className="w-full h-full max-w-screen-3xl flex justify-between items-center px-40">
        <motion.div
          className="h-full py-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.7 }}
        >
          <Avatar color="thirdMain" />
        </motion.div>
        <motion.div
          className="w-full max-w-[200px] flex justify-between items-center text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.8, duration: 0.3 }}
        >
          <ButtonNaked fonts="text-3xl xl:text-4xl" onClick={handleOnMailClick}>
            <SVGGradientWrapper
              iconId="nav-mail"
              IconElement={IoMailOutline}
              attribute="stroke"
            />
          </ButtonNaked>
          <Link href="https://github.com/MattiasSoderberg" target>
            <SVGGradientWrapper
              iconId="nav-github"
              IconElement={IoLogoGithub}
              attribute="fill"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mattias-s%C3%B6derberg-b0b509103/"
            target
          >
            <SVGGradientWrapper
              IconElement={IoLogoLinkedin}
              attribute="fill"
              iconId="nav-linkedin"
            />
          </Link>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navigation;
