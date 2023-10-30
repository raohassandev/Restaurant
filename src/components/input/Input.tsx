import "./input.scss";

import React from "react";

interface Props {
  type: React.HTMLInputTypeAttribute;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  value: string;
  onChange: (text: string) => void;
}
export const Input = ({ type, className, style, value, label, onChange }: Props) => {
  const inputStyle = { width: "100%", ...style };
  return (
    <div className="d-flex form-floating input_container">
      <input
        type={type}
        value={value}
        className={`d-flex form-control w-100 ${className}`}
        placeholder={label}
        style={inputStyle}
        onChange={(e) => onChange(e.target.value)}
      />
      <label>{label}</label>
    </div>
  );
};
