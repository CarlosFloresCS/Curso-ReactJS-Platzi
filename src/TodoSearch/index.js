import React from "react";
import "./TodoSearch.css";

// { searchValue, setSearchValue }
function TodoSearch({searchValue, setSearchValue,loading}) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };
