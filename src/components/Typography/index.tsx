import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "sh1"
  | "sh2"
  | "sh3"
  | "light"
  | "xs"
  | "small";

interface Props {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  sh1: "p",
  sh2: "p",
  sh3: "p",
  light: "p",
  xs: "p",
  small: "p",
};

const sizes: Record<Variant, string> = {
  h1: "text-7xl md:text-8xl font-bold",
  h2: "text-6xl md:text-7xl font-bold",
  h3: "text-5xl md:text-6xl font-semibold",
  h4: "text-4xl md:text-5xl font-semibold",
  h5: "text-3xl md:text-4xl font-bold",
  sh1: "text-2xl md:text-3xl font-semibold",
  sh2: "text-xl md:text-2xl",
  sh3: "text-lg md:text-xl",
  light: "text-sm md:text-base font-semibold",
  xs: "text-xs md:text-sm font-extralight",
  small: "text-[10px] md: text-xs font-thin",
};

export const Typography = ({
  variant = "light",
  children,
  className,
  as,
}: Props) => {
  const sizeClasses = sizes[variant];
  const Tag = as || tags[variant];

  return (
    <Tag className={`${sizeClasses} ${className} font-poppinns`}>
      {children}
    </Tag>
  );
};
