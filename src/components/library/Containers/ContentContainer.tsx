import React from "react";

const ContentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-full max-w-screen-3xl max-h-screen-3xl flex flex-col justify-center items-center px-2 md:px-10 lg:px-20 2xl:px-40 pt-0 md:pt-14 pb-2 md:pb-24 relative">
      {children}
    </section>
  );
};

export default ContentContainer;
