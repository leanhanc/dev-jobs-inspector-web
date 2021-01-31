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
  type?: string;
  icon?: any;
}

const TypeheadInputProps: React.FC<TypeheadInputProps> = ({ placeholder, type = "text", icon }) => {
  // State
  const [isTypeaheadOpen, setIsTypeaheadOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Refs
  const typeaheadContainerRef = useRef(null);

  // Handlers
  const onTypeaheadInsideClick = () => setIsTypeaheadOpen(true);
  const onTypeaheadOutsideClick = () => setIsTypeaheadOpen(false);
  const onInputTypeChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);
  const onTypeaheadSelected = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    setSearchValue(event.currentTarget.id.split("-").pop());
    setIsTypeaheadOpen(false);
  };

  // Memos
  const filteredSearchOptions = useMemo(() => {
    const regex = new RegExp(`^${searchValue}`, `i`);
    return searchOptions.sort().filter(option => regex.test(option));
  }, [searchValue]);

  // Hooks
  useOnClickOutside(typeaheadContainerRef, onTypeaheadOutsideClick);

  return (
    <div className="Input" ref={typeaheadContainerRef}>
      <input
        maxLength={32}
        type={type}
        className="BaseInput pointer"
        placeholder={placeholder}
        value={searchValue}
        onChange={onInputTypeChange}
        onClick={onTypeaheadInsideClick}
      />

      {icon && (
        <span className="InputIcon">
          <img src={icon} />
        </span>
      )}

      {searchValue && (
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
