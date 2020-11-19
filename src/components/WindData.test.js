import React from "react";
import { shallow } from "enzyme";

import { FilterBlock as BareFilterBlock } from "./FilterBlock.js";
import WindData from "./WindData.js";

describe("💨 WindData without Redux", () => {
  let testDate;

  beforeEach(() => {
    testDate = new Date();
  });

  test("renders FilterBlock", () => {
    const windData = shallow(<WindData time={testDate} />);
    expect(windData.find(BareFilterBlock)).toBeTruthy();
  });
});
