import formatDistance from "date-fns/formatDistance";
import esLocale from "date-fns/locale/es";

// Assets
import GlobeIcon from "../../assets/globe.svg";
import Publisher from "../../assets/publisher.svg";
import ArrowRight from "../../assets/arrow-right.svg";

// Styles
import advertCardStyles from "./AdvertCard.module.sass";
import cardStyles from "../Card/Card.module.sass";

interface AdvertCardProps {
	advert: Advert;
}

const AdvertCard = ({ advert }: AdvertCardProps) => {
	const getDateInfo = () => {
		const distance = formatDistance(new Date(advert.date), new Date(), {
			addSuffix: true,
			locale: esLocale,
		});

		return distance === "hace 1 día" ? "Ayer" : distance;
	};

	return (
		<article className={`${cardStyles.Card} ${advertCardStyles.AdvertCard}`}>
			<p className={advertCardStyles.date}>{getDateInfo()}</p>
			<h4 className={advertCardStyles.title}>{advert.title}</h4>
			<p className={advertCardStyles.description}>{advert.description}</p>
			<span className={advertCardStyles.metadata}>
				<GlobeIcon />
				{advert.site}
			</span>
			{advert.publisher && (
				<span className={advertCardStyles.metadata}>
					<Publisher />
					{advert.publisher}
				</span>
			)}
			<a
				className={advertCardStyles.ctaButton}
				href={advert.url}
				rel="noopener noreferrer"
				target="_blank"
			>
				Abrir <ArrowRight />
			</a>
		</article>
	);
};

`
	p {
		font-size: 1.2rem;
	}
`;

export default AdvertCard;
