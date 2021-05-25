import React, { MouseEvent } from "react";
import classNames from "classnames";

// Styles
import styles from "./Button.module.sass";

export interface ButtonProp {
  children: React.ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  style?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  variant?: "primary";
}

const Button: React.FC<ButtonProp> = ({
  children,
  disabled = false,
  onClick,
  style,
  type = "button",
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.Button, style, { [styles.primary]: variant === "primary" })}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
