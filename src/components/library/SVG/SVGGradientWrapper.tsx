import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../tailwind.config";
import { IconType } from "react-icons";

type FillType = "stroke" | "fill";

interface Props {
  IconElement: IconType;
  attribute?: FillType;
  fromColor?: string;
  toColor?: string;
}

const SVGGradientWrapper = ({
  IconElement,
  attribute = "fill",
  fromColor = "firstLight",
  toColor = "firstLighter",
}: Props) => {
  const { theme } = resolveConfig(tailwindConfig as any);
  return (
    <>
      <svg width="0" height="0">
        <linearGradient
          id="nav-icon-gradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="50%"
        >
          <stop stopColor={theme.colors[fromColor]} offset="0%" />
          <stop stopColor={theme.colors[toColor]} offset="70%" />
        </linearGradient>
      </svg>
      <IconElement
        style={{ [attribute]: "url(#nav-icon-gradient)" }}
        className="text-3xl md:text-4xl"
      />
    </>
  );
};

export default SVGGradientWrapper;
