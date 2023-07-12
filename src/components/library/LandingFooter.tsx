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
    <div className="w-full h-fit flex gap-20">
      <div className="min-w-[200px] min-h-[200px] relative rounded-full overflow-hidden filter grayscale">
        <Image
          src={getImageUrl(landingFooter?.image)}
          alt={landingFooter?.image.alt || "No alt text"}
          fill
          sizes="(max-width: 500px) 400px"
        />
      </div>
      <div className="w-3/5 flex flex-col items-end justify-end gap-10">
        <TextRegular color="firstLighter">{landingFooter?.text}</TextRegular>
        <div className="pr-10">
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
