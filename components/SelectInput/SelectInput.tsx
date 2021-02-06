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
  type?: string;
  icon?: any;
}

const SelectInput: React.FC<SelectInputProps> = ({ placeholder, type = "text", icon }) => {
  // State
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [currentSelectItemValue, setSelectedItemValue] = useState("");

  // Refs
  const selectInputContainerRef = useRef(null);

  // Handlers
  const onSelectInputInsideClick = () => !isSelectOpen && setIsSelectOpen(true);
  const onSelectInputOutsideClick = () => setIsSelectOpen(false);
  const onSelectInputItemSelected = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSelectedItemValue(event.currentTarget.innerText);
    setIsSelectOpen(false);
  };

  // Hooks
  useOnClickOutside(selectInputContainerRef, onSelectInputOutsideClick);

  return (
    <div className="Input" ref={selectInputContainerRef}>
      <div className="BaseInput pointer relative" onClick={onSelectInputInsideClick}>
        {currentSelectItemValue ? (
          <span>{currentSelectItemValue}</span>
        ) : (
          <span className="placeholder">{placeholder}</span>
        )}

        {icon && (
          <span
            className={classnames("InputIcon", {
              "rotated-vertically": isSelectOpen,
            })}
          >
            <img src={icon} />
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
                  id={`dropdown-${option.value}`}
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
