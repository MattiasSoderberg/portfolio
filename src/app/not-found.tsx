import { H1, H2 } from "@/components/library/Typography";
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="w-full h-full flex justify-center items-center gap-10">
      <H1>404</H1>
      <H2>This page could not be found.</H2>
    </div>
  );
};

export default NotFoundPage;
