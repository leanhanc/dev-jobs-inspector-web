import React, { useRef, useState } from "react";
import classnames from "classnames";

// Hooks
import { useOnClickOutside } from "hooks";

// Data
import dropdownOption from "data/dropdownOptions";

// Styles
import styles from "./SelectInput.module.sass";

interface SelectInputProps {
	placeholder?: string;
	Icon?: any;
	onSelect: (any) => void;
}

const SelectInput = ({ onSelect, placeholder, Icon }: SelectInputProps) => {
	// State
	const [isSelectOpen, setIsSelectOpen] = useState(false);
	const [currentSelectItemValue, setSelectedItemValue] = useState("");

	// Refs
	const selectInputContainerRef = useRef(null);

	// Handlers
	const onSelectInputInsideClick = () => !isSelectOpen && setIsSelectOpen(true);
	const onSelectInputOutsideClick = () => setIsSelectOpen(false);
	const onSelectInputItemSelected = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		const selectedText = event.currentTarget.innerText;
		const selectedValue = event.currentTarget.id;

		setIsSelectOpen(false);
		setSelectedItemValue(selectedText);
		if (selectedText === "Argentina") {
			onSelect("");
		} else {
			onSelect(selectedValue);
		}
	};

	// Hooks
	useOnClickOutside(selectInputContainerRef, onSelectInputOutsideClick);

	return (
		<div className="Input" ref={selectInputContainerRef}>
			<div className="BaseInput pointer relative" onClick={onSelectInputInsideClick}>
				{currentSelectItemValue ? (
					<span className={classnames({ SelectInputListItemSelected: currentSelectItemValue })}>
						{currentSelectItemValue}
					</span>
				) : (
					<span>{placeholder}</span>
				)}

				{Icon && (
					<span
						className={classnames("InputIcon", {
							"rotated-vertically": isSelectOpen,
						})}
					>
						<Icon />
					</span>
				)}
				<div
					className={classnames(styles.SelectInput, {
						[styles.SelectInputOpen]: isSelectOpen,
					})}
				>
					<ul className={styles.SelectInputList}>
						{dropdownOption.map(option => {
							return (
								<li
									className={styles.SelectInputListItem}
									key={`dropdown-${option.value}`}
									id={option.value}
									onClick={onSelectInputItemSelected}
								>
									{option.name}
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default React.memo(SelectInput);
