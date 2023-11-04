// import React, { ReactNode } from 'react';

import React, { CSSProperties, ReactNode } from "react";

interface BoxProps {
  children: ReactNode;
  margin?: string | number;
  padding?: string | number;
  horizontal?: "start" | "center" | "end" | "space-between" | "space-around";
  vertical?: "start" | "center" | "end" | "space-between" | "space-around";
  fullWidth?: boolean;
  fullHeight?: boolean;
  style?: CSSProperties;
  className?: string;
  onClick?: () => void;
}
/**
 *
 * @param children: Requird - Text or TSX node.
 * @param margin: Optional - External argin of container.
 * @param margin: Optional - internal padding of container.
 * @param className: Optional - CSS class name
 * @param fullWidth: Optional - Spreed the container to full width in the parent container.
 * @param fullHeight: Optional - Spreed the container to full height in the parent container.
 * @param horizontal: Optional - Horizontal arrangement of the row content. Like "start" | "center" | "end" | "space-between" | "space-around";
 * @param vertical: Optional - Vertical allignment of the row. Like "start" | "center" | "end" | "space-between" | "space-around";
 * @param styel:  Optional - styles of the row.
 * @param onClick: Optional - box area click handler.
 * @returns
 */

export const Box: React.FC<BoxProps> = ({
  children,
  margin = 8,
  padding = 8,
  horizontal = "start",
  vertical = "start",
  fullWidth = false,
  fullHeight = false,
  style = {},
  className,
  onClick,
}) => {
  const outerContainerStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    margin: margin && typeof margin === "number" ? `${margin}px` : margin,
    padding: padding && typeof padding === "number" ? `${padding}px` : padding,
    borderRadius: 5,
    ...style,
  };
  const innerContainerStyles: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: horizontal,
    justifyContent: vertical,
    width: fullWidth ? "100%" : "auto",
    height: fullHeight ? "100vh" : "auto",
  };

  return (
    <div style={outerContainerStyles} className={className} onClick={onClick}>
      <div style={innerContainerStyles}>{children}</div>
    </div>
  );
};
