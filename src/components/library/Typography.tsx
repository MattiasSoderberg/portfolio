import React from "react";

const stylePropTypes = {
  color: "color",
  size: "size",
} as const;

type StyleProps = {
  -readonly [key in keyof typeof stylePropTypes]?: string;
};

interface CommonProps {
  children: React.ReactNode | string;
}

type Props = CommonProps & StyleProps;

const baseStyles = {
  color: "lightMain",
};

const getStyles = (...params: string[]): string => {
  const [color, size, str] = params;
  const classes = `text-${size} text-${color} ${str}`;

  return classes;
};

export const H1 = ({
  children,
  color = baseStyles.color,
  size = "5xl font-medium",
}: Props) => {
  const classes = getStyles(color, size);
  return <h1 className={classes}>{children}</h1>;
};

export const H2 = ({
  children,
  color = baseStyles.color,
  size = "3xl",
}: Props) => {
  const classes = getStyles(color, size);
  return <h2 className={classes}>{children}</h2>;
};

export const H3 = ({
  children,
  color = baseStyles.color,
  size = "xl",
}: Props) => {
  const classes = getStyles(color, size);
  return <h3 className={classes}>{children}</h3>;
};

export const TextLarge = ({
  children,
  color = baseStyles.color,
  size = "lg",
}: Props) => {
  const classes = getStyles(color, size);
  return <p className={classes}>{children}</p>;
};

export const TextRegular = ({
  children,
  color = baseStyles.color,
  size = "base",
}: Props) => {
  const classes = getStyles(color, size);
  return <p className={classes}>{children}</p>;
};
