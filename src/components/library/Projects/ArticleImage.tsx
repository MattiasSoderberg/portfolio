import React from "react";
import { SanityDocument } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import getImageUrl from "@/utils/getImageUrl";

interface Props {
  project: SanityDocument;
  maxImageSize?: number;
}

const ArticleImage = ({ project, maxImageSize = 350 }: Props) => {
  const url = getImageUrl(project?.mainImage);
  const imageWidth = getImageDimensions(project?.mainImage).width;
  const imageHeight = getImageDimensions(project?.mainImage).height;
  const isStandingImage = imageHeight > imageWidth;
  const imageRatio = isStandingImage
    ? imageHeight / imageWidth
    : imageWidth / imageHeight;

  const getDimensions = () => {
    if (isStandingImage) {
      const maxHeight = maxImageSize * 0.75;
      const width =
        imageHeight > maxHeight
          ? Math.round(maxHeight / imageRatio)
          : imageWidth;
      const height = imageHeight > maxHeight ? maxHeight : imageHeight;
      return { width, height };
    }
    const width = imageWidth > maxImageSize ? maxImageSize : imageWidth;
    const height =
      imageWidth > maxImageSize
        ? Math.round(maxImageSize / imageRatio)
        : imageHeight;
    return { width, height };
  };

  return (
    <Image
      src={url}
      width={getDimensions().width}
      height={getDimensions().height}
      alt={
        project?.mainImage.alt || "Very unfortunate, this image has no alt text"
      }
    />
  );
};

export default ArticleImage;
