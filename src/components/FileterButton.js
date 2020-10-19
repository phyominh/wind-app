import React, { useState, useEffect } from "react";

const FilterButton = () => {
  const options = [
    "Live Data",
    "Date Data",
    "Month Data",
    "Range Data",
    "Seasonal Data",
  ];
  const [option, setOption] = useState(options[0]);
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickDropdown = (e) => {
    e.stopPropagation();

    setIsDropdownActive(!isDropdownActive);
  };

  const removeDropdown = () => {
    setIsDropdownActive(false);
  };

  useEffect(() => {
    if (isDropdownActive) {
      addEventListener("click", removeDropdown);
    }
    return () => {
      removeEventListener("click", removeDropdown);
    };
  }, [isDropdownActive]);

  const chooseOption = (e) => {
    e.preventDefault();

    setOption(e.target.text);
  };

  return (
    <div className="control">
      <div
        className={isDropdownActive ? "dropdown is-active" : "dropdown"}
        onClick={clickDropdown}
      >
        <div className="dropdown-trigger">
          <button
            className="button is-small is-primary is-outlined"
            aria-haspopup="true"
            aria-controls="filter-options"
          >
            {option}
          </button>
        </div>
        <div className="dropdown-menu" id="filter-options">
          <div className="dropdown-content">
            {options.map((opt, index) => (
              <a
                className={
                  opt == option ? "dropdown-item is-active" : "dropdown-item"
                }
                onClick={chooseOption}
                key={index}
              >
                {opt}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterButton;
