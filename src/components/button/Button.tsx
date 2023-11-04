import React, { useState } from "react";

// import { Ellipsis } from "react-css-spinners";

export interface ButtonProps {
  variant?: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
  spread?: boolean; // width 100%
  children?: React.ReactNode;
  isLoading?: boolean;
  label?: string;
}

export const Button = ({
  label,
  isLoading = false,
  disabled = false,
  onClick,
  variant = "primary",
  size,
  type,
  style,
  spread,
  children,
}: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    setIsActive(true);
    if (onClick) {
      onClick();
    }
  };

  const className = ["btn"];
  if (variant) {
    className.push(`btn-${variant}`);
  }
  if (size) {
    className.push(`btn-${size}`);
  }
  if (disabled) {
    className.push("disabled");
  }
  if (type) {
    className.push(`btn-${type}`);
  }
  if (spread) {
    className.push(`btn-block`);
  }

  return (
    <button
      className={className.join(" ")}
      disabled={disabled}
      onClick={handleOnClick}
      aria-disabled={disabled}
      aria-pressed={isActive}
      style={style}>
      {children || label}
    </button>
  );
};
