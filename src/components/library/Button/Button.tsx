import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  HTMLInputTypeAttribute,
} from "react";

type ButtonPropType = "button" | "submit" | undefined;

export interface ButtonProps {
  children: React.ReactNode;
  type?: ButtonPropType;
  color?: string;
  fonts?: string;
  background?: string;
  paddings?: string;
  borders?: string;
  borderRadius?: string;
  transition?: string;
  hovers?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  type = "button",
  color = "lightMain",
  fonts = "text-lg",
  background = "bg-secondMain",
  paddings = "py-3 px-7",
  borders = "",
  borderRadius = "rounded-sm",
  transition = "transition-all duration-150 ease-in",
  hovers,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const bgColor = background.split("-")[1].split(/(?=[A-Z])/)[0];
  const hoverClasses = hovers ? hovers : `hover:bg-${bgColor}Light`;
  const baseClasses = `${fonts} ${paddings} ${borders} ${borderRadius}`;
  const activeClasses = `text-${color} ${background} ${hoverClasses} ${transition} ${baseClasses}`;
  const disabledClasses = `${baseClasses} bg-darkLight text-darkLighter`;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={disabled ? disabledClasses : activeClasses}
    >
      {children}
    </button>
  );
};

export default Button;
