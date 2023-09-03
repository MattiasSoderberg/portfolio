import React from "react";
import Button, { ButtonProps } from "../Button";

interface Props extends ButtonProps {
  className?: string;
  gradient?: boolean;
}

const ButtonNaked = ({
  background = "bg-transparent",
  paddings = "",
  fonts = "text-3xl",
  color,
  gradient = false,
  borderRadius = "",
  ...rest
}: Props) => {
  const classNames = {
    background,
    paddings,
    fonts,
    color,
    gradient: gradient && "nav-icon-gradient",
    borderRadius,
  };

  return <Button {...rest} {...classNames} />;
};

export default ButtonNaked;
