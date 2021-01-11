import React from "react";

// Styles
import styles from "./Input.module.sass";

interface InputProps {
  placeholder?: string;
  type?: string;
  icon?: any;
  variant?: "typeahead" | "dropdown";
}

const Input: React.FC<InputProps> = ({ placeholder, type = "text", icon }) => {
  return (
    <div className={styles.Input}>
      <input
        maxLength={32}
        type={type}
        className={styles.BaseInput}
        placeholder={placeholder}
      />

      {icon && (
        <span className={styles.InputIcon}>
          <img src={icon} />
        </span>
      )}
    </div>
  );
};

export default Input;
