import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";

import App from "./App.js";

describe("App", () => {
  test("renders an HTML element and removes it", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
