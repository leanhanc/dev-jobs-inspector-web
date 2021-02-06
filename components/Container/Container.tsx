import React from "react";
import classNames from "classnames";

// Styles
import styles from "./Container.module.sass";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
  id: string;
}

const Container: React.FC<ContainerProps> = ({ children, id, style }: ContainerProps) => {
  return (
    <section id={id} className={classNames([styles.Container, style])}>
      {children}
    </section>
  );
};

export default Container;
