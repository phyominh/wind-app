import React from "react";

import Navbar from "./components/Navbar.js";
import Dashboard from "./pages/Dashboard.js";

const App = () => {
  return (
    <div className="body-wrapper is-flex">
      <div className="row is-flex">
        <nav className="main-nav p-small">
          <Navbar />
        </nav>
        <div className="main-content has-background-white">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default App;
