import React from "react";
import { shallow } from "enzyme";

import App from "./App.js";

const HEADER = "Hello World!";

test("Header of App", () => {
  const app = shallow(<App />);
  expect(app.contains(HEADER)).toBe(true);
});
