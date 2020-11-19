import React from "react";
import { shallow } from "enzyme";

import { FilterBlock } from "./FilterBlock.js";
import WindData from "./WindData.js";

describe("💨 WindData without Redux", () => {
  test("renders FilterBlock", () => {
    const windData = shallow(<WindData />);
    expect(windData.find(FilterBlock)).toBeTruthy();
  });
});
