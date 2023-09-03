import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  as?: string;
  color?: string;
  hovers?: string;
  transition?: string;
  shallow?: boolean;
}

const NextLink = ({
  children,
  href,
  as = "",
  color = "lightMain",
  hovers = "hover:text-lightDarker hover:underline",
  transition = "transition-all duration-150 ease-in",
  shallow = true,
}: Props) => {
  return (
    <Link
      as={as ? as : href}
      href={href}
      className={`text-${color} text-base 2xl:text-lg ${hovers} ${transition}`}
      shallow={shallow}
    >
      {children}
    </Link>
  );
};

export default NextLink;
