import React from "react";
type Event = React.ChangeEvent<HTMLInputElement>;
interface Props {
  type: React.HTMLInputTypeAttribute;
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  value: string;
  onChange: (text: string) => void;
  id?: string;
}
export const Input = ({ type, className, style, value, onChange, id = "" }: Props) => {
  const inputStyle = { width: "100%", ...style };
  return (
    <div className="d-flex form-floating mb-3 w-100">
      <input
        type={type}
        value={value}
        className={`d-flex form-control w-100 ${className}`}
        id={id}
        placeholder="name@example.com"
        style={inputStyle}
        onChange={(e) => onChange(e.target.value)}
      />
      <label>Email address</label>
    </div>
  );
};
