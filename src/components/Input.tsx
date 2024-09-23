import React from "react";
import "./Input.css";

type InputProps = {
  type?:
    | "text"
    | "number"
    | "email"
    | "password"
    | "date"
    | "datetime-local"
    | "month"
    | "time"
    | "week"
    | "url"
    | "search"
    | "tel"
    | "color";
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
};

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
}) => {
  return (
    <input
      className="input-box"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
};

export default Input;
