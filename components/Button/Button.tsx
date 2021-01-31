import React from "react";
import classNames from "classnames";

// Styles
import styles from "./Button.module.sass";

export interface ButtonProp {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  variant: "primary";
}

const Button: React.FC<ButtonProp> = ({
  children,
  type = "button",
  disabled = false,
  variant = "primary",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={classNames(styles.Button, { [styles.primary]: variant === "primary" })}
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
