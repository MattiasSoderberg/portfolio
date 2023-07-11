import React from "react";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full max-w-screen-3xl max-h-screen-3xl flex flex-col justify-center items-center px-40 pt-14 pb-24">
      {children}
    </div>
  );
};

export default ContentContainer;
