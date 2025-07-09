import React, { JSX } from "react";

export interface CardInterface {
  onClick: () => void;
  children: JSX.Element;
  isSelected: Boolean;
}
const Card = ({ onClick, children, isSelected }: CardInterface) => (
  <button
    style={{
      border: 0,
      padding: 24,
      margin: 12,
      borderRadius: 3,
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
export default Card;
