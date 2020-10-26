import React, { useState, useEffect } from "react";

import StatusBar from "../components/StatusBar.js";
import WindData from "../components/WindData.js";

const Dashboard = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const increment = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    return () => clearInterval(increment);
  }, []);

  return (
    <div id="dashboard">
      <div className="p-small mb-small">
        <StatusBar time={currentDateTime} />
      </div>
      <div className="mx-small mb-small">
        <WindData time={currentDateTime} />
      </div>
    </div>
  );
};

export default Dashboard;
