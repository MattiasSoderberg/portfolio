import React from "react";
import Image from "next/image";
import { SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
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
    <div className="w-full md:max-w-[90%] xl:max-w-[80%] h-fit flex flex-col items-center sm:items-start sm:flex-row gap-5 lg:gap-10 2xl:gap-20">
      <div className="w-fit h-fit min-w-[150px] 2xl:min-w-[200px] min-h-[150px] 2xl:min-h-[200px] relative rounded-full overflow-hidden filter grayscale">
        <Image
          src={getImageUrl(landingFooter?.image)}
          alt={landingFooter?.image.alt || "No alt text"}
          fill
          sizes="(max-width: 200px) 200px"
        />
      </div>
      <div className="flex flex-col items-center sm:items-end justify-end gap-5 xl:gap-10">
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
