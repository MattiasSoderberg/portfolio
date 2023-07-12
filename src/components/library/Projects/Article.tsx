import React from "react";
import { PortableText } from "@portabletext/react";
import { useProjectContext } from "@/context/ProjectContext";
import { H3 } from "../Typography";
import components from "./ArticleTextComponents";
import { PortableTextBlock } from "@portabletext/types";
import ArticleImage from "./ArticleImage";
import Link from "@/components/library/Link";
import SVGGradientWrapper from "../SVG/SVGGradientWrapper";
import { IoLogoGithub, IoOpenOutline } from "react-icons/io5";

const Article = () => {
  const { currentProject } = useProjectContext();

  return (
    currentProject && (
      <div className="w-full h-full flex flex-col gap-8 px-10 overflow-y-scroll">
        <H3 size="3xl">{currentProject?.title as string}</H3>
        {(currentProject?.mainImage as any) && (
          <ArticleImage project={currentProject} />
        )}
        <PortableText
          value={currentProject?.content as PortableTextBlock[]}
          components={components}
        />
        <div className="w-fit h-fit flex gap-8">
          {(currentProject?.url as string) && (
            <Link href={currentProject?.url as string} target>
              <SVGGradientWrapper
                IconElement={IoOpenOutline}
                iconId={currentProject?._id}
              />
            </Link>
          )}
          {(currentProject?.githubUrl as string) && (
            <Link href={currentProject?.githubUrl as string} target>
              <SVGGradientWrapper
                iconId={currentProject?._id}
                IconElement={IoLogoGithub}
                fromColor="secondLight"
                toColor="secondLighter"
              />
            </Link>
          )}
        </div>
      </div>
    )
  );
};

export default Article;
