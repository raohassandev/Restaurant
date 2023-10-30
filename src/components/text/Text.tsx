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
  variant?: "h1" | "h2" | "h3" | "body";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Text: React.FC<TextProps> = ({ variant = "body", children, className, onClick }) => {
  return (
    <div className={`typography typography-${variant} ${className}`} onClick={() => onclick}>
      {children}
    </div>
  );
};
