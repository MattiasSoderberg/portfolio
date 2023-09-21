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
  ariaLabel?: string;
  role?: string;
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
  ariaLabel = "",
  role = "button",
  onClick,
}: ButtonProps) => {
  const bgColor = background.split("-")[1].split(/(?=[A-Z])/)[0];
  const hoverClasses = hovers ? hovers : `hover:bg-${bgColor}Light`;
  const baseClasses = `${fonts} ${paddings} ${borders} ${borderRadius}`;
  const activeClasses = `text-${color} ${background} ${hoverClasses} ${transition} ${baseClasses}`;
  const disabledClasses = `${baseClasses} bg-darkLight text-darkLighter`;

  return (
    <button
      aria-label={ariaLabel}
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
