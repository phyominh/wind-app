import React from "react";
import { shallow } from "enzyme";
import { format } from "date-fns";

import DateTimeInput from "./DateTimeInput.js";
import { WindData as BareWindData } from "./WindData.js";

describe("💨 WindData without Redux", () => {
  let testDate;

  beforeEach(() => {
    testDate = new Date();
  });

  test("renders p tag for Live Data option", () => {
    const dateFormat = "MMM d, yyy";
    const windData = shallow(
      <BareWindData time={testDate} option={"Live Data"} />
    );
    expect(windData.find("p").text()).toEqual(format(testDate, dateFormat));
  });

  test("renders DateTimeInput for other options", () => {
    const windData = shallow(
      <BareWindData time={testDate} option={"Other option"} />
    );
    expect(windData.find(DateTimeInput)).toHaveLength(1);
  });
});
