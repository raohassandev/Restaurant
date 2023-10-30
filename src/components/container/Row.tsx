// import "./Row.css"; // Import your CSS for styling

import React from "react";

interface RowProps {
  children: React.ReactNode;
  className?: string;
  horizontal?: "start" | "center" | "end" | "space-between" | "space-around";
  vertical?: "start" | "center" | "end" | "space-between" | "space-around";
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
/**
 *
 * @param children: Requird - Text or TSX node.
 * @param className: Optional - CSS class name
 * @param fullWidth: Optional - Spreed The row to full width of the container.
 * @param horizontal: Optional - Horizontal arrangement of the row content. Like "start" | "center" | "end" | "space-between" | "space-around";
 * @param vertical: Optional - Vertical allignment of the row. Like "start" | "center" | "end" | "space-between" | "space-around";
 * @param styel:  Optional - styles of the row.
 * @returns
 */
export const Row: React.FC<RowProps> = ({ children, className, fullWidth, horizontal, vertical, style }) => {
  const rowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: horizontal,
    alignItems: vertical,
    width: fullWidth ? "100%" : "auto",
    ...style,
  };
  return (
    <div className={`${className}`} style={rowStyle}>
      {children}
    </div>
  );
};
