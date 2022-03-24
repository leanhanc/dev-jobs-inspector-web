import React, { useMemo, useRef, useState } from "react";
import classnames from "classnames";

// Hooks
import { useOnClickOutside } from "hooks";

// Data
import searchOptions from "data/searchOptions";

// Styles
import styles from "./TypeaheadInput.module.sass";

interface TypeheadInputProps {
	placeholder?: string;
	Icon?: any;
	searchTerm: string;
	setSearchTerm?: React.Dispatch<React.SetStateAction<string>>;
	submitHandler?: () => void;
}

const TypeheadInputProps: React.FC<TypeheadInputProps> = ({
	placeholder,
	Icon,
	searchTerm,
	setSearchTerm,
	submitHandler,
}) => {
	// State
	const [isTypeaheadOpen, setIsTypeaheadOpen] = useState(false);

	// Refs
	const typeaheadContainerRef = useRef(null);
	const typeaheadInputRef = useRef(null);

	// Handlers
	const onTypeaheadInsideClick = () => setIsTypeaheadOpen(true);
	const onTypeaheadOutsideClick = () => setIsTypeaheadOpen(false);
	const onInputTypeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
		setSearchTerm(event.target.value);
	const onTypeaheadSelected = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		setSearchTerm(event.currentTarget.dataset.name);
		setIsTypeaheadOpen(false);
	};
	const onTypeaheadIconPress = () => {
		typeaheadInputRef.current?.focus();
	};
	const onTypeaheadSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			setIsTypeaheadOpen(false);
			submitHandler();
		}
	};

	// Memos
	const filteredSearchOptions = useMemo(() => {
		const regex = new RegExp(`^${searchTerm}`, `i`);
		return searchOptions.sort().filter(option => regex.test(option));
	}, [searchTerm]);

	// Hooks
	useOnClickOutside(typeaheadContainerRef, onTypeaheadOutsideClick);

	return (
		<div className="Input" ref={typeaheadContainerRef}>
			<input
				maxLength={32}
				type="text"
				className="BaseInput"
				placeholder={placeholder}
				value={searchTerm}
				onChange={onInputTypeChange}
				onClick={onTypeaheadInsideClick}
				ref={typeaheadInputRef}
				onKeyDown={onTypeaheadSubmit}
			/>

			{Icon && (
				<span className="InputIcon" onClick={onTypeaheadIconPress}>
					<Icon />
				</span>
			)}

			{searchTerm && (
				<div
					className={classnames(styles.TypeaheadInputContainer, {
						[styles.TypeaheadInputContainerOpen]: isTypeaheadOpen,
					})}
				>
					<ul className={styles.TypeaheadInputList}>
						{filteredSearchOptions.map(searchOption => {
							return (
								<li
									className={styles.TypeaheadInputListItem}
									key={`option-${searchOption}`}
									onClick={onTypeaheadSelected}
									id={`option-${searchOption}`}
									data-name={searchOption}
								>
									{searchOption}
								</li>
							);
						})}
					</ul>
				</div>
			)}
		</div>
	);
};

export default React.memo(TypeheadInputProps);
