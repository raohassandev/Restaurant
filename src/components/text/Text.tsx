// import React from "react";

// type TextProps = {
//   variant: "h1" | "h2" | "h3" | "body";
//   children: React.ReactNode;
//   className: string;
// };

// export const Text: React.FC<TextProps> = ({ variant, children, className }) => {
//   const Tag =
//     variant === "h1" ? "h1" : variant === "h2" ? "h2" : variant === "h3" ? "h3" : variant === "body" ? "p" : "div"; // Default to <div> if variant is not recognized

//   return <Tag className={`typography typography-${variant}`}>{children}</Tag>;
// };

import React from "react";

type TextProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "body";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Text: React.FC<TextProps> = ({ variant = "body", children, className, onClick }) => {

  const mergedClassName = [`typography typography-${variant}`];
  if (className) { mergedClassName.push(className) }

  return (
    // <div className={`typography typography-${variant} ${className}`} onClick={() => onclick}>
    <div className={mergedClassName.join(" ")} onClick={() => onclick}>
      {children}
    </div>
  );
};
