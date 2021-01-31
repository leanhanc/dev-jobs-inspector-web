import React from "react";

export interface ButtonProp {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
}

const Button: React.FC<ButtonProp> = ({ children, type = "button", disabled = false }) => {
  return (
    <button type={type} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(Button);
