import React from "react";
import "./Button.css";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?:
    | "default"
    | "outline"
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
  size?: "small" | "medium" | "large";
  type?: "button" | "submit" | "reset";
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  variant = "default",
  size = "medium",
  type = "button",
}) => {
  return (
    <button
      className={`button ${variant} ${size} ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
