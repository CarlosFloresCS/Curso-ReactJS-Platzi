import React from "react";
import "./TodoSearch.css";

// { searchValue, setSearchValue }
function TodoSearch({searchValue, setSearchValue}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  );
}

export { TodoSearch };
