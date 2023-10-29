import React from "react";

type TextProps = {
  variant: "h1" | "h2" | "h3" | "body";
  children: React.ReactNode;
};

export const Text: React.FC<TextProps> = ({ variant, children }) => {
  const Tag =
    variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : variant === "body" ? "p" : "div"; // Default to <div> if variant is not recognized

  return <Tag className={`typography typography-${variant}`}>{children}</Tag>;
};

