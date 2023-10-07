import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | number | ReactNode | any;
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
