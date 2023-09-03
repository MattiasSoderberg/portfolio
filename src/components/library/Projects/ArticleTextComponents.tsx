import React from "react";
import { H2, H3, TextRegular } from "../Typography";
import { PortableTextComponents } from "@portabletext/react";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }: any) => <H2>{children}</H2>,
    h3: ({ children }: any) => <H3>{children}</H3>,
    normal: ({ children }: any) =>
      children != "" ? <TextRegular>{children}</TextRegular> : null,
  },
};

export default components;
