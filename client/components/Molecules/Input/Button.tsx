import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | number;
  className: string;
}

export default function Button({
  children,
  className,
  ...inputProp
}: ButtonProps) {
  return (
    <button className={`btn ${className}`} {...inputProp}>
      {children}
    </button>
  );
}
