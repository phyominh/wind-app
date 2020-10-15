import React from "react";

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

export default StatusBlock;
