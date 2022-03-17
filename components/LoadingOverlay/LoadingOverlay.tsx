// Components
import { ClipLoader } from "react-spinners";
import ClientOnlyPortal from "components/ClientOnlyPortal";
import { useLoadingContext } from "hooks";

// Styles
import styles from "./LoadingOverlay.module.sass";

const LoadingOverlay = () => {
	const { isLoading } = useLoadingContext();

	return (
		isLoading && (
			<ClientOnlyPortal selector="#loading-overlay">
				<div role="presentation" className={styles.LoadingOverlay}>
					<ClipLoader color="#b1add8" size={48} />
				</div>
			</ClientOnlyPortal>
		)
	);
};

export default LoadingOverlay;
