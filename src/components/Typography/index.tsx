import React, { ElementType } from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subheading1"
  | "subheading2"
  | "subheading3"
  | "paragraph1"
  | "paragraph2"
  | "paragaraph3"
  | "custom";

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
  subheading1: "p",
  subheading2: "p",
  subheading3: "p",
  paragraph1: "p",
  paragraph2: "p",
  paragaraph3: "p",
  custom: "p",
};

const sizes: Record<Variant, string> = {
  h1: "font-bold",
  h2: "font-bold",
  h3: "font-semibold",
  h4: "font-semibold",
  h5: "text-xl md:text-3xl font-bold",
  subheading1: "font-semibold",
  subheading2: "text-xs md:text-xl",
  subheading3: "",
  paragraph1: "font-semibold",
  paragraph2: "font-extralight",
  paragaraph3: "font-thin",
  custom: "",
};

export const Typography = ({
  variant = "paragraph1",
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
