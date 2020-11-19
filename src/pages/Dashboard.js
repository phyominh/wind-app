import React from "react";

import StatusBar from "../components/StatusBar.js";
import WindData from "../components/WindData.js";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <div className="p-small mb-small">
        <StatusBar />
      </div>
      <div className="mx-small mb-small">
        <WindData />
      </div>
    </div>
  );
};

export default Dashboard;
