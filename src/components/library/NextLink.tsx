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
  ariaLabel?: string;
  onClick?: () => void;
}

const NextLink = ({
  children,
  href,
  as = "",
  color = "lightMain",
  hovers = "hover:text-lightDarker hover:underline",
  transition = "transition-all duration-100 ease-out",
  shallow = true,
  ariaLabel = "",
  onClick,
}: Props) => {
  return (
    <Link
      as={as ? as : href}
      href={href}
      className={`text-${color} text-base 2xl:text-lg ${hovers} ${transition}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NextLink;
