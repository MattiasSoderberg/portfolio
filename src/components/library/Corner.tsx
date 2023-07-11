import React from "react";

export const POSITIONS = {
  topLeft: "topLeft",
  topRight: "topRight",
  bottomLeft: "bottomLeft",
  bottomRight: "bottomRight",
} as const;

type Position = (typeof POSITIONS)[keyof typeof POSITIONS];

interface Props {
  position: Position;
  small?: boolean;
}

const Corner = ({ position, small = false }: Props) => {
  const positionClasses = {
    topLeft: "top-0 left-0",
    topRight: "rotate-90 top-0 right-0",
    bottomLeft: "-rotate-90 bottom-0 left-0",
    bottomRight: "rotate-180 bottom-0 right-0",
  };

  const cornerClasses = `absolute ${positionClasses[position]}`;

  return (
    <div className={cornerClasses}>
      <div className="w-[250px] h-[10px] corner-linear-gradient-horizontal z-0" />
      <div className="w-[10px] h-[240px] corner-linear-gradient-vertical z-0" />
    </div>
  );
};

export default Corner;
