"use client";
import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import getImageUrl from "@/utils/getImageUrl";
import { TextRegular } from "./Typography";
import ButtonStandard from "./Button/variants/ButtonStandard";
import useModal from "@/hooks/useModal";

interface Props {
  document: SanityDocument;
}

const LandingFooter = ({ document }: Props) => {
  const { landingFooter } = document;
  const { openModal } = useModal();

  const onClick = () => {
    openModal("contact");
  };

  return (
    <div className="w-full h-fit flex flex-col items-center gap-4 sm:items-start sm:flex-row md:max-w-[90%] lg:gap-8 xl:max-w-[80%] 2xl:gap-16">
      {/* <div className="w-fit h-fit min-w-[150px] min-h-[150px] relative rounded-full overflow-hidden filter grayscale 2xl:min-w-[200px] 2xl:min-h-[200px]"> */}
      <div className="w-[150px] h-[150px] min-w-[150px] max-h-[150px] relative rounded-full overflow-hidden filter grayscale sm:w-[100px] sm:h-[100px] sm:min-w-[100px] sm:max-h-[100px] lg:w-[150px] lg:h-[150px] lg:min-w-[150px] lg:max-h-[150px] xl:w-[200px] xl:h-[200px] xl:min-w-[200px] xl:max-h-[200px]">
        <Image
          src={getImageUrl(landingFooter?.image)}
          alt={landingFooter?.image.alt || "No alt text"}
          fill
          sizes="(max-width: 200px) 100px, 150px, 200px"
          style={{
            objectFit: "fill",
          }}
        />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-end gap-5 sm:items-end xl:gap-10">
        <TextRegular color="firstLighter">{landingFooter?.text}</TextRegular>
        <div className="p-0 sm:pr-10">
          <ButtonStandard
            background="bg-firstMain"
            fonts="text-base"
            onClick={onClick}
          >
            {landingFooter?.buttonText}
          </ButtonStandard>
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
