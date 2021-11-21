import advertCardStyles from "./AdvertCard.module.sass";
import cardStyles from "../Card/Card.module.sass";

interface AdvertCardProps {
	advert: Advert;
}

const AdvertCard = ({ advert }: AdvertCardProps) => {
	return (
		<article className={`${cardStyles.Card} ${advertCardStyles.AdvertCard}`}>
			<div className={advertCardStyles.description}>{advert.description}</div>
		</article>
	);
};

export default AdvertCard;
