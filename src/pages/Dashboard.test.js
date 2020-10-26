import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./Dashboard.js";
import StatusBar from "../components/StatusBar.js";
import WindData from "../components/WindData.js";

describe("📈 Dashboard", () => {
  test("renders child components", () => {
    const dashboard = shallow(<Dashboard />);
    expect(dashboard.find(StatusBar)).toHaveLength(1);
    expect(dashboard.find(WindData)).toHaveLength(1);
  });
});
