import React, { useState, useEffect } from "react";
import { format } from "date-fns";

export const dateFormat = "MMM d, yyyy";

const CurrentDate = () => {
  const [currentDate, setCurrentDate] = useState(
    format(new Date(), dateFormat)
  );

  useEffect(() => {
    const tick = setInterval(() => {
      const date = format(new Date(), dateFormat);
      if (date !== currentDate) setCurrentDate(date);
    });

    return () => clearInterval(tick);
  });

  return <p className="live-data">{currentDate}</p>;
};

export default CurrentDate;
