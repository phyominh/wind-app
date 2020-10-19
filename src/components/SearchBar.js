import React from "react";

import DateTimeInput from "./DateTimeInput.js";
import FilterButton from "./FileterButton.js";

const SearchBar = () => {
  return (
    <div className="search-bar mb-small">
      <FilterButton />
      <div className="mr-auto">
        <DateTimeInput />
      </div>
    </div>
  );
};

export default SearchBar;
