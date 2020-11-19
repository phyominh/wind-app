import React from "react";
import PropTypes from "prop-types";

import DataCard from "./DataCard.js";
import FilterBlock from "./FilterBlock.js";

const WindData = () => {
  return (
    <>
      <FilterBlock />
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
};

export default WindData;
