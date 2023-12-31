import React from "react";
import { SanityDocument } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import getImageUrl from "@/utils/getImageUrl";

interface Props {
  project: SanityDocument;
  maxImageSize?: number;
}

const ArticleImage = ({ project, maxImageSize = 400 }: Props) => {
  const url = getImageUrl(project?.mainImage);
  const imageWidth = getImageDimensions(project?.mainImage).width;
  const imageHeight = getImageDimensions(project?.mainImage).height;
  const imageRatio = imageWidth / imageHeight;

  const imageDimensions = {
    width: imageWidth > maxImageSize ? maxImageSize : imageWidth,
    height: imageWidth > maxImageSize ? maxImageSize / imageRatio : imageHeight,
  };

  return (
    <Image
      src={url}
      width={imageDimensions.width}
      height={Math.round(imageDimensions.height)}
      alt={
        project?.mainImage.alt || "Very unfortunate, this image has no alt text"
      }
    />
  );
};

export default ArticleImage;
