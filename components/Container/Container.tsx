import React from "react";

// Styles
import styles from "./Container.module.sass";

const Container: React.FC = ({ children }) => {
  return <div className={styles.Container}>{children}</div>;
};

export default Container;
