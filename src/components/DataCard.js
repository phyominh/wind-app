import React from "react";

const DataCard = ({ label, value, unit }) => {
  return (
    <div className="card data-card">
      <div className="card-content">
        <p className="data-label">{label}</p>
        <p className="data-value">{value}</p>
        <p className="data-unit">{unit}</p>
      </div>
    </div>
  );
};

export default DataCard;
