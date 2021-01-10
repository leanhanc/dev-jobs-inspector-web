import React from "react";

// Styles
interface InputProps {
  placeholder?: string;
}

const SearchInput: React.FC<InputProps> = ({ placeholder }) => {
  return <input type="text" />;
};

export default SearchInput;
