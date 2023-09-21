"use client";
import React from "react";
import { motion } from "framer-motion";
import Avatar from "./library/SVG/Avatar";
import {
  IoMailOutline,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMenu,
} from "react-icons/io5";
import Link from "./library/Link";
import ButtonNaked from "./library/Button/variants/ButtonNaked";
import SVGGradientWrapper from "./library/SVG/SVGGradientWrapper";
import useModal from "@/hooks/useModal";
import NextLink from "./library/NextLink";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const path = usePathname();
  const { openModal } = useModal();

  const handleOnMailClick = () => {
    openModal("contact");
  };

  const handleOnMenuClick = () => {
    openModal("menu");
  };

  const variants = {
    initial: path === "/" ? { opacity: 0 } : { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 1.8, duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <nav className="w-full h-navHeight bg-bgDarkMain flex justify-center items-center 3xl:h-[100px] z-10">
      <div className="w-full h-full max-w-screen-3xl flex justify-between items-center px-2 md:px-10 lg:px-20 2xl:px-40">
        <motion.div
          className="h-full py-4 hidden md:block"
          variants={variants}
          initial="initial"
          animate="visible"
        >
          <NextLink href="/" ariaLabel="Back to home">
            <Avatar color="firstLighter" />
          </NextLink>
        </motion.div>
        <motion.div
          className="block md:hidden"
          variants={variants}
          initial="initial"
          animate="visible"
        >
          <ButtonNaked
            fonts="text-firstLighter text-3xl"
            ariaLabel="Open project menu"
            onClick={handleOnMenuClick}
          >
            <SVGGradientWrapper
              iconId="menu"
              IconElement={IoMenu}
              attribute="stroke"
              fromColor="secondMain"
              toColor="secondLighter"
            />
          </ButtonNaked>
        </motion.div>
        <motion.div
          className="w-full max-w-[200px] flex justify-between items-center text-3xl"
          variants={variants}
          initial="initial"
          animate="visible"
        >
          <div className="w-fit h-[28px] md:hidden">
            <NextLink href="/">
              <Avatar color="firstLighter" />
            </NextLink>
          </div>
          <ButtonNaked
            fonts="text-3xl xl:text-4xl"
            ariaLabel="Open contact form"
            onClick={handleOnMailClick}
          >
            <SVGGradientWrapper
              iconId="nav-mail"
              IconElement={IoMailOutline}
              attribute="stroke"
            />
          </ButtonNaked>
          <Link
            href="https://github.com/MattiasSoderberg"
            target
            ariaLabel="Check out my GitHub"
          >
            <SVGGradientWrapper
              iconId="nav-github"
              IconElement={IoLogoGithub}
              attribute="fill"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mattias-s%C3%B6derberg-b0b509103/"
            target
            ariaLabel="Check out my Linkedin profile"
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
