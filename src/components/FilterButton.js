import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { chooseOption, resetDate } from "../actions.js";

export const FilterButton = ({ items, option, dispatch }) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);

  const clickDropdown = () => {
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

  const selectOption = (e) => {
    e.preventDefault();

    dispatch(chooseOption(e.target.text));
    dispatch(resetDate());
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
        {isDropdownActive ? (
          <div className="dropdown-menu" id="filter-options">
            <div className="dropdown-content">
              {items.map((opt) => (
                <a
                  className={
                    opt == option ? "dropdown-item is-active" : "dropdown-item"
                  }
                  onClick={selectOption}
                  key={opt}
                >
                  {opt}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

FilterButton.propTypes = {
  items: PropTypes.array,
  option: PropTypes.string,
  dispatch: PropTypes.func,
};

const mapState = (state) => {
  return { option: state.option };
};

export default connect(mapState)(FilterButton);
