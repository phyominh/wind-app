import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addDays, format } from "date-fns";

import DateInput from "./DateInput.js";
import FilterButton from "./FilterButton.js";
import options from "./FilterOptions.js";

export const FilterBlock = ({ time, option, datesFromInputs }) => {
  const currentDate = format(time, "MMM d, yyyy");
  const inputFormat = "yyyy-M-d";
  const sliderConfig = {
    year: {
      format: "YYYY",
      caption: "Year",
      step: 1,
    },
    month: {
      format: "MMMM",
      caption: "Month",
      step: 1,
    },
    date: {
      format: "D",
      caption: "Day",
      step: 1,
    },
  };

  let defaultConfig = {
    minDate: "2020-4-1",
    maxDate: "2020-6-30",
    sliderConfig: sliderConfig,
  };
  let rangeConfig;

  switch (datesFromInputs.length) {
    case 1:
      rangeConfig = {
        minDate: format(addDays(datesFromInputs[0], 1), inputFormat),
        maxDate: defaultConfig.maxDate,
        sliderConfig: sliderConfig,
      };
      break;
    case 2: {
      const lastDate = defaultConfig.maxDate;
      defaultConfig.maxDate = format(datesFromInputs[0], inputFormat);
      console.log(datesFromInputs[1], inputFormat);
      rangeConfig = {
        minDate: format(addDays(datesFromInputs[0], 1), inputFormat),
        maxDate: lastDate,
        format: sliderConfig,
      };
      break;
    }
    default:
      rangeConfig = null;
  }

  return (
    <div className="filter-block mb-small">
      <FilterButton items={options} />
      {(() => {
        switch (option) {
          case options[0]:
            return <p className="live-data">{currentDate}</p>;
          case options[3]:
            return (
              <div className="input-group">
                <div className="is-inline-block">
                  <DateInput
                    selection={option}
                    config={defaultConfig}
                    inputIndex={0}
                    inputValue={
                      datesFromInputs.length > 0
                        ? format(datesFromInputs[0], inputFormat)
                        : null
                    }
                  />
                </div>
                <div className="range-icon">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g data-name="Layer 2">
                        <g data-name="chevron-right">
                          <rect
                            width="24"
                            height="24"
                            transform="rotate(-90 12 12)"
                            opacity="0"
                          />
                          <path d="M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z" />
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="is-inline-block">
                  <DateInput
                    selection={option}
                    config={rangeConfig}
                    inputIndex={1}
                    inputValue={
                      datesFromInputs.length > 1
                        ? format(datesFromInputs[1], inputFormat)
                        : null
                    }
                  />
                </div>
              </div>
            );
          default:
            return (
              <DateInput
                selection={option}
                config={defaultConfig}
                inputValue={
                  datesFromInputs.length > 0
                    ? format(datesFromInputs[0], inputFormat)
                    : null
                }
              />
            );
        }
      })()}
    </div>
  );
};

FilterBlock.propTypes = {
  time: PropTypes.instanceOf(Date),
  option: PropTypes.string,
  datesFromInputs: PropTypes.array,
};

const mapState = (state, ownProps) => {
  return {
    time: ownProps.time,
    option: state.option,
    datesFromInputs: state.datesFromInputs,
  };
};

export default connect(mapState)(FilterBlock);