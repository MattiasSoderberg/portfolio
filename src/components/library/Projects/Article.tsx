import React from "react";
import { PortableText } from "@portabletext/react";
import { H1 } from "../Typography";
import components from "./ArticleTextComponents";
import { PortableTextBlock } from "@portabletext/types";
import ArticleImage from "./ArticleImage";
import Link from "@/components/library/Link";
import SVGGradientWrapper from "../SVG/SVGGradientWrapper";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";
import { SanityValues } from "../../../../sanity.config";
import { AnimatePresence, motion } from "framer-motion";

const Article = ({
  currentProject,
}: {
  currentProject: SanityValues["project"];
}) => {
  return (
    <AnimatePresence>
      {currentProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          exit={{ opacity: 0 }}
          className="w-full h-full max-w-[100%] flex flex-col gap-8 pr-2 overflow-y-auto custom-scrollbar"
        >
          <H1>{currentProject?.title}</H1>
          {currentProject?.mainImage && (
            <ArticleImage project={currentProject} />
          )}
          <PortableText
            value={currentProject?.content as PortableTextBlock[]}
            components={components}
          />
          <div className="w-fit h-fit flex gap-8">
            {currentProject?.url && (
              <Link href={currentProject?.url} target>
                <SVGGradientWrapper
                  iconId={currentProject?._id}
                  IconElement={IoOpenOutline}
                  attribute="stroke"
                  fromColor="secondLight"
                  toColor="secondLighter"
                />
              </Link>
            )}
            {currentProject?.githubUrl && (
              <Link href={currentProject?.githubUrl} target>
                <SVGGradientWrapper
                  iconId={currentProject?._id}
                  IconElement={IoLogoGithub}
                  fromColor="secondLight"
                  toColor="secondLighter"
                />
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Article;
