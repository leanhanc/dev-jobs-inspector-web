import React from "react";

// Components
import Container from "components/Container";

// Styles
import styles from ".About.module.sass";

const About = () => {
  return (
    <section id="About" className={styles.About}>
      <Container>
        <h1 className={styles.title}>
          Encontrá tu próximo trabajo en el mundo del desarrollo de software
        </h1>
        <h1 className={styles.title}>
          Encontrá tu próximo trabajo en el mundo del desarrollo de software
        </h1>
      </Container>
    </section>
  );
};

export default About;
