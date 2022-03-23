import { PuffLoader } from "react-spinners";

// Components
import AdvertCard from "components/AdvertCard";
import Pagination from "components/Pagination";

// Styles
import styles from "./Adverts.module.sass";

// Assets
import EmptyIllustration from "public/img/empty.svg";
interface AdvertsProps {
	adverts: Advert[];
	isLoading: boolean;
	handlePageChange: React.Dispatch<React.SetStateAction<number>>;
	currentPage: number;
	totalPages: number;
}

const Adverts = ({
	adverts,
	isLoading = true,
	currentPage,
	totalPages,
	handlePageChange,
}: AdvertsProps) => {
	if (isLoading && !adverts) {
		return (
			<div id="Adverts" className={styles.Adverts}>
				<PuffLoader />
			</div>
		);
	}

	if (adverts.length === 0) {
		return (
			<div id="Adverts" className={styles.Adverts}>
				<p className={styles.NoResults}>No encontramos resultados para tu búsqueda 😢</p>
				<EmptyIllustration></EmptyIllustration>
			</div>
		);
	}

	return (
		<section id="Adverts" className={styles.Adverts}>
			<div className={styles.AdvertsList}>
				{adverts.map(advert => {
					return <AdvertCard advert={advert} key={advert._id} />;
				})}
			</div>

			<Pagination
				currentPage={currentPage}
				totalPages={totalPages}
				handlePageChange={handlePageChange}
			/>
		</section>
	);
};

export default Adverts;
