import React from "react";
import PropTypes from "prop-types";

const StatusBlock = ({ label, labelIcon, value, valueIcon }) => {
  return (
    <div className="p-small">
      <p className="data-label">
        {label}
        {labelIcon ? (
          <span className="icon status-icon">{labelIcon}</span>
        ) : null}
      </p>
      <p className="status-value">
        {value}
        {valueIcon ? (
          <span className="icon status-icon">{valueIcon}</span>
        ) : null}
      </p>
    </div>
  );
};

StatusBlock.propTypes = {
  label: PropTypes.string.isRequired,
  labelIcon: PropTypes.node,
  value: PropTypes.string.isRequired,
  valueIcon: PropTypes.node,
};

export default StatusBlock;
