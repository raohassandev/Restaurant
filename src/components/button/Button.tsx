import { Ellipsis } from "react-css-spinners";
import React from "react";
export interface ButtonProps {
  label?: string;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  spread?: boolean; // width 100%
  children?: React.ReactNode;
}

export const Button = ({
  label,
  isLoading = false,
  disabled = false,
  onClick,
  style,
  spread,
  children,
}: ButtonProps) => {
  const buttonStyle: React.CSSProperties = {
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    ...style,
  };
  return (
    <div
      style={
        spread
          ? { display: "d-flex w-100", justifyContent: "center", alignItems: "center" }
          : { display: "flex", justifyContent: "center", alignItems: "center" }
      }>
      <button
        className={`btn btn-primary ${spread ? "p-3 d-flex  w-100 " : ""}${isLoading ? "disabled" : ""}`}
        style={buttonStyle}
        onClick={!isLoading && !disabled ? onClick : undefined}>
        <div>
          {children ? (
            children
          ) : (
            <div>
              {isLoading && <Ellipsis color="red" />}
              {label && <div>{label}</div>}
            </div>
          )}
        </div>
      </button>
    </div>
  );
};
