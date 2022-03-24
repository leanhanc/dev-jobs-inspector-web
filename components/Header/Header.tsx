import React, { useCallback } from "react";
import { QueryLazyOptions } from "@apollo/client";
import Image from "next/image";

// Components
import Button from "components/Button";
import TypeaheadInput from "components/TypeaheadInput";
import SelectInput from "components/SelectInput";

// Assets
import searchIcon from "/public/img/search-icon.svg";
import locationIcon from "/public/img/location.svg";

// Styles
import styles from "./Header.module.sass";

// Config
import { JOBS_PER_PAGE } from "pages";

// Hooks
import { useLoadingContext } from "hooks";

interface HeaderProps {
	currentPage: number;
	isLoading: boolean;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	onSearch: (options?: QueryLazyOptions<FindAdvertsVariables>) => void;
	searchTerm: string;
	handleSearchTermChanged: React.Dispatch<React.SetStateAction<string>>;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	location: string;
	setLocation: React.Dispatch<React.SetStateAction<string>>;
	handleGoHome: () => void;
}

const Header = ({
	currentPage,
	onSearch,
	isLoading,
	handleGoHome,
	handleSearchTermChanged,
	searchTerm,
	setCurrentPage,
	location,
	setLocation,
}: HeaderProps) => {
	// Context
	const { setIsLoading } = useLoadingContext();

	// Handlers
	const handleSearch = useCallback(() => {
		setCurrentPage(1);
		setIsLoading(true);

		onSearch({
			variables: {
				location,
				page: currentPage,
				limit: JOBS_PER_PAGE,
				search: searchTerm,
			},
		});
	}, [searchTerm, currentPage, searchTerm, location]);

	return (
		<div id="Header" className={styles.Header}>
			<div className={styles.Hero}>
				<div className={styles.HeaderContent}>
					<div className={styles.HeaderBackground} />
					<Image
						alt="Dev Jobs Inspector Argentina"
						objectPosition="left"
						priority
						src="/img/bg.jpg"
						layout="fill"
						objectFit="cover"
					/>
					<div className={styles.HeaderLogo}>
						<Image
							alt="Buscar"
							width={150}
							height={150}
							layout="responsive"
							objectPosition="center"
							src="/img/logo.png"
							onClick={handleGoHome}
						/>
					</div>
					<fieldset className={styles.HeaderInputs}>
						<TypeaheadInput
							placeholder="Área, lenguaje o framework"
							Icon={searchIcon}
							searchTerm={searchTerm}
							setSearchTerm={handleSearchTermChanged}
						/>
						<SelectInput placeholder="Argentina" Icon={locationIcon} onSelect={setLocation} />
					</fieldset>

					<Button
						type="button"
						style={styles.HeaderCta}
						onClick={handleSearch}
						disabled={isLoading}
					>
						BUSCAR
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Header;
