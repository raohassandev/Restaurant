import React from "react";

type ButtonProps = {
  label?: string;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  spread?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  icon,
  label,
  leftIcon,
  rightIcon,
  isLoading = false,
  disabled = false,
  onClick,
  style,
  spread,
}) => {
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
          : { justifyContent: "center", alignSelf: "center" }
      }>
      <button
        className={`btn btn-primary ${spread ? "p-3 d-flex  w-100 " : ""}${isLoading ? "disabled" : ""}`}
        style={buttonStyle}
        onClick={!isLoading && !disabled ? onClick : undefined}>
        {icon ? (
          <span className="m-1">{icon}</span>
        ) : (
          <div>
            {leftIcon && <span className="me-2">{leftIcon}</span>}
            {isLoading && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            )}
            {label && <div>{label}</div>}
            {rightIcon && <span className="ms-2">{rightIcon}</span>}
          </div>
        )}
      </button>
    </div>
  );
};
