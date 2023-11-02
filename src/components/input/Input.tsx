import "./input.scss";

import React from "react";

interface Props {
  type: React.HTMLInputTypeAttribute;
  className?: string;
  style?: React.CSSProperties;
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (text: string) => void;
}
/**
 *
 * @param type requird type of input used for. Like "number" | "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "password" | "radio" | "range" | "reset" | "search".
 * @param className optional CSS style for Input
 * @param style optional CSS Style object.
 * @param label optional label for inptut.
 * @param value required value of the input.
 * @param placeholer optional Place holder.
 * @param onChange required text change handler.
 * @returns
 */
export const Input = ({ type, className, style, value, label, placeholder, onChange }: Props) => {
  const inputStyle = { width: "100%", ...style };
  return (
    <div className="d-flex form-floating input_container">
      <input
        type={type}
        value={value||undefined}
        className={`d-flex form-control w-100 ${className}`}
        placeholder={placeholder || label}
        style={inputStyle}
        onChange={(e) => onChange(e.target.value)}
      />
      <label>{label}</label>
    </div>
  );
};
