import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

import StatusBlock from "./StatusBlock.js";

const StatusBar = () => {
  const timeFormat = "h:mm a";
  const [currentTime, setCurrentTime] = useState(
    format(new Date(), timeFormat)
  );

  useEffect(() => {
    const tick = setInterval(() => {
      const time = format(new Date(), timeFormat);
      if (time !== currentTime) setCurrentTime(time);
    });

    return () => clearInterval(tick);
  });

  const moreIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="arrow-circle-right">
          <rect
            width="24"
            height="24"
            transform="rotate(-90 12 12)"
            opacity="0"
          />
          <path d="M17 12v-.09a.88.88 0 0 0-.06-.28.72.72 0 0 0-.11-.19 1 1 0 0 0-.09-.13l-2.86-3a1 1 0 0 0-1.45 1.38L13.66 11H8a1 1 0 0 0 0 2h5.59l-1.3 1.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l3-3a1 1 0 0 0 .21-.32A1 1 0 0 0 17 12z" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        </g>
      </g>
    </svg>
  );

  const infoIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g data-name="Layer 2">
        <g data-name="menu-arrow-circle">
          <rect
            width="24"
            height="24"
            transform="rotate(180 12 12)"
            opacity="0"
          />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 6a3.5 3.5 0 0 0-3.5 3.5 1 1 0 0 0 2 0A1.5 1.5 0 1 1 12 11a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.16A3.49 3.49 0 0 0 12 6z" />
          <circle cx="12" cy="17" r="1" />
        </g>
      </g>
    </svg>
  );

  return (
    <div className="card status-bar is-radius-large">
      <div className="columns">
        <div className="column is-3">
          <StatusBlock label={"Time"} value={currentTime} />
        </div>
        <div className="column is-3">
          <StatusBlock
            label={"Location"}
            value={"Letkokkon"}
            valueIcon={moreIcon}
          />
        </div>
        <div className="column is-3">
          <StatusBlock
            label={"Sensors"}
            value={"RK600-02"}
            valueIcon={moreIcon}
          />
        </div>
        <div className="column is-3">
          <StatusBlock
            label={"IoT Status"}
            labelIcon={infoIcon}
            value={"Online"}
          />
        </div>
      </div>
    </div>
  );
};

StatusBar.propTypes = {
  time: PropTypes.instanceOf(Date),
};

export default StatusBar;
