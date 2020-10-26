import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { format } from "date-fns";

import DataCard from "./DataCard.js";
import DateTimeInput from "./DateTimeInput.js";
import FilterButton from "./FilterButton.js";
import options from "./FilterOptions.js";

export const WindData = ({ time, option }) => {
  const currentDate = format(time, "MMM d, yyyy");
  return (
    <>
      <div className="search-bar mb-small">
        <FilterButton items={options} />
        {option == options[0] ? (
          <p className="live-data">{currentDate}</p>
        ) : (
          <DateTimeInput type={option} />
        )}
      </div>
      <div className="cards-container">
        <div className="row">
          <div className="data-card-container mb-small mr-small">
            <DataCard label="Wind Speed" value="5" unit="m/s" />
            <DataCard label="Wind Direction" value="360" unit="degree" />
            <DataCard label="Wind Power Density" value="1.8" unit="W/m&#178;" />
            <DataCard label="Relative Humidity" value="99" unit="%" />
          </div>
          <div className="chart-container mb-small">
            <div className="chart-column">
              <div className="card data-chart mb-small"></div>
              <div className="row">
                <div className="card data-chart"></div>
                <div className="card data-chart"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WindData.propTypes = {
  time: PropTypes.instanceOf(Date),
  option: PropTypes.string,
};

const mapState = (state, ownProps) => {
  return { time: ownProps.time, option: state.option };
};

export default connect(mapState)(WindData);
