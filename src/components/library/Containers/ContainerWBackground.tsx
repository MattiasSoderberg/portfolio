import React from "react";
import BackgroundBlurs from "../BackgroundBlurs";
import BackgroundSVG from "../SVG/BackgroundSVG";

const ContainerWBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center relative">
      <div className={`w-full h-full absolute top-0 left-0`}>
        <div className="w-full h-full px-10">
          <BackgroundSVG />
        </div>
      </div>
      <div className="w-full h-full bg-bgDarkMain absolute top-0 left-0" />
      {children}
    </section>
  );
};

export default ContainerWBackground;
