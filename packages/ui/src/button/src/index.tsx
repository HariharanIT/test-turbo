import React, { JSX } from "react";

export interface ButtonInterface {
  onClick: () => void;
  children: JSX.Element;
  isSelected: Boolean;
}
const Button = ({ onClick, children, isSelected }: ButtonInterface) => (
  <button
    style={{
      border: 0,
      padding: 24,
      margin: 12,
      borderRadius: 3,
      color: "red",
      background: "black",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Button;
