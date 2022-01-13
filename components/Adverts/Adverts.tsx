import { PuffLoader } from "react-spinners";

// Components
import AdvertCard from "components/AdvertCard";

// Styles
import styles from "./Adverts.module.sass";
interface AdvertsProps {
	adverts: Advert[];
	isLoading: boolean;
}

const Adverts = ({ adverts, isLoading = true }: AdvertsProps) => {
	if (isLoading) {
		return (
			<div id="Adverts" className={styles.Adverts}>
				<PuffLoader />
			</div>
		);
	}

	if (adverts.length === 0) {
		return (
			<div id="Adverts" className={styles.Adverts}>
				No encontramos resultados para tu búsqueda
			</div>
		);
	}
	return (
		<section id="Adverts" className={styles.Adverts}>
			{adverts.map(advert => {
				return <AdvertCard advert={advert} key={advert._id} />;
			})}
		</section>
	);
};

export default Adverts;
