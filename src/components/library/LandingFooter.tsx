"use client";
import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import getImageUrl from "@/utils/getImageUrl";
import { TextRegular } from "./Typography";
import ButtonStandard from "./Button/variants/ButtonStandard";
import useModal from "@/hooks/useModal";
import { SanityValues } from "../../../sanity.config";

interface Props {
  content: SanityValues["landingContent"]["landingFooter"];
}

const LandingFooter = ({ content }: Props) => {
  // const { landingFooter } = footerContent;
  const { openModal } = useModal();
  const image = getImageUrl(content?.image);
  console.log(image);

  const onClick = () => {
    openModal("contact");
  };

  return (
    <div className="w-full h-fit flex flex-col items-center gap-4 sm:items-start sm:flex-row md:max-w-[90%] lg:gap-8 xl:max-w-[80%] 2xl:gap-16">
      {/* <div className="w-fit h-fit min-w-[150px] min-h-[150px] relative rounded-full overflow-hidden filter grayscale 2xl:min-w-[200px] 2xl:min-h-[200px]"> */}
      <div className="min-w-[150px] min-h-[150px] max-w-[150px] max-h-[150px] relative rounded-full overflow-hidden filter grayscale xl:max-w-[200px] xl:min-h-[200px] xl:min-w-[200px] xl:max-h-[200px]">
        <Image
          src={getImageUrl(content?.image)}
          // alt={content?.image.alt || "No alt text"}
          alt={"No alt text"}
          fill
          sizes="(max-width: 200px) 150px, 200px"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-end gap-5 sm:items-end xl:gap-10">
        <TextRegular color="firstLighter">{content?.text}</TextRegular>
        <div className="p-0 sm:pr-10">
          <ButtonStandard
            background="bg-firstMain"
            color="text-darkMain"
            fonts="text-base"
            onClick={onClick}
          >
            {content?.buttonText}
          </ButtonStandard>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
