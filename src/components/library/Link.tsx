import React from "react";

interface Props {
  children?: React.ReactNode;
  href?: string;
  target?: boolean;
  className?: string;
}

const Link = ({ children, href, target, className }: Props) => {
  return (
    <a href={href} target={target ? "_blank" : ""} className={className}>
      {children}
    </a>
  );
};

export default Link;
