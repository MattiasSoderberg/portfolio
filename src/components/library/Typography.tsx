import React from "react";

const stylePropTypes = {
  color: "color",
  size: "size",
  fonts: "fonts",
} as const;

type StyleProps = {
  -readonly [key in keyof typeof stylePropTypes]?: string;
};

interface CommonProps {
  children: React.ReactNode | string;
  classNames?: string;
}

type Props = CommonProps & StyleProps;

const baseStyles = {
  color: "lightMain",
};

const getStyles = (...params: string[]): string => {
  const [color, size, str] = params;
  const classes = `text-${size} text-${color} ${str ? str : ""}`;

  return classes;
};

export const H1 = ({
  children,
  color = baseStyles.color,
  size = "text-4xl 2xl:text-5xl",
  fonts = "font-medium",
}: Props) => {
  const textColor = `text-${color}`;
  return (
    <h1 className={`${size} ${textColor} ${fonts ? fonts : ""}`}>{children}</h1>
  );
};

export const H2 = ({
  children,
  color = baseStyles.color,
  size = "text-xl lg:text-2xl 2xl:text-3xl",
}: Props) => {
  const textColor = `text-${color}`;
  return <h2 className={`${textColor} ${size}`}>{children}</h2>;
};

export const H3 = ({
  children,
  color = baseStyles.color,
  size = "text-base lg:text-lg 2xl:text-xl",
}: Props) => {
  const textColor = `text-${color}`;
  return <h3 className={`${textColor} ${size}`}>{children}</h3>;
};

export const TextLarge = ({
  children,
  color = baseStyles.color,
  size = "text-base xl:text-lg",
}: Props) => {
  const textColor = `text-${color}`;
  return <p className={`${textColor} ${size}`}>{children}</p>;
};

export const TextRegular = ({
  children,
  color = baseStyles.color,
  size = "text-sm xl:text-base",
}: Props) => {
  const textColor = `text-${color}`;
  return <p className={`${textColor} ${size}`}>{children}</p>;
};

export const TextSmall = ({
  children,
  color = baseStyles.color,
  size = "text-xs xl:text-sm",
}: Props) => {
  const textColor = `text-${color}`;
  return <p className={`${textColor} ${size}`}>{children}</p>;
};
