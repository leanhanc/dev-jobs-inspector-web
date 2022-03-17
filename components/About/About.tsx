import React from "react";

// Components
import Container from "components/Container";

// Styles
import styles from "./About.module.sass";

const About = () => {
	return (
		<Container id="About" style={styles.About}>
			<h1 className={styles.title}>
				Encontrá tu próximo trabajo en el mundo del desarrollo de software
			</h1>
			<div className={styles.separator} />
			<h1 className={styles.subtitle}>
				<p>
					Como developers odiamos hacer tareas repetitivas. Entrar a distintos portales para buscar
					exactamente lo mismo es un ejemplo de ello.
				</p>
				<p>
					Con <span className="bold">Dev Jobs Inspector</span> tenemos acceso a los avisos
					publicados en los sitios más importantes de Argentina en un sólo lugar.
				</p>
			</h1>
		</Container>
	);
};

export default About;
