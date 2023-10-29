// import React, { ReactNode } from 'react';

import React, { CSSProperties, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  margin?: string | number;
  padding?: string | number;
  horizontalArrangement?: "start" | "center" | "end" | "space-between" | "space-around";
  verticalArrangement?: "start" | "center" | "end" | "space-between" | "space-around";
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: CSSProperties;
  className?: string;
}

export const Box: React.FC<BoxProps> = ({
  children,
  margin = 16,
  padding = 8,
  horizontalArrangement = "start",
  verticalArrangement = "start",
  fullWidth = false,
  fullHeight = false,
  style = {},
  className,
}) => {
  const outerContainerStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: margin && typeof margin === "number" ? `${margin}px` : margin,
    padding: padding && typeof padding === "number" ? `${padding}px` : padding,
    borderRadius: 10,
    ...style,
  };
  const innerContainerStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: horizontalArrangement,
    justifyContent: verticalArrangement,
    width: fullWidth ? "100%" : "auto",
    height: fullHeight ? "100vh" : "auto",
  };

  return (
    <div style={outerContainerStyles} className={className}>
      <div style={innerContainerStyles}>{children}</div>
    </div>
  );
};



