import React from "react";

interface Props {
  children?: React.ReactNode;
  href?: string;
  target?: boolean;
  ariaLabel?: string;
  className?: string;
}

const Link = ({ children, href, target, ariaLabel, className }: Props) => {
  return (
    <a
      href={href}
      target={target ? "_blank" : ""}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
};

export default Link;
