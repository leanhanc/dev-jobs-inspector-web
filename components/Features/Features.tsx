import React from "react";

// Components
import Container from "components/Container";
import Card from "components/Card";

// Styles
import styles from "./Features.module.sass";

// Assets
import SourcesIcon from "/public/img/search-document.svg";
import Github from "/public/img/github.svg";
import Thunderbolt from "/public/img/thunderbolt.svg";

const cards = [
	{
		Icon: <SourcesIcon />,
		title: "Múltiples Fuentes",
		content: `Encontrás al mismo tiempo avisos publicados recientemente en Computrabajo, Zonajobs y Bumeran, tres de los portales de trabajo más populares.`,
	},
	{
		Icon: <Github />,
		title: "Open Source",
		content: `El proyecto tiene tres repositorios abiertos a colaboración: un scraper, el cliente y una API. Esta última es pública, por lo que podés utilizarla si querés armar tu propio cliente.`,
	},
	{
		Icon: <Thunderbolt />,
		title: "Velocidad",
		content: `Los portales de trabajos suelen ser lentos. Gracias al poder de React, en Dev Job Inspector pasás el menor tiempo posible buscando para poder concentrarte en enviar CVs.`,
	},
];

const Features = () => {
	return (
		<Container style={styles.Features} id="Features">
			{cards.map(({ title, content, Icon }) => {
				return <Card title={title} content={content} Icon={Icon} key={title} />;
			})}
		</Container>
	);
};

export default Features;
