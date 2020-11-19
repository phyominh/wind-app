import React from "react";
import { shallow } from "enzyme";
import { format } from "date-fns";

import DateInput from "./DateInput.js";
import { FilterBlock as BareFilterBlock } from "./FilterBlock.js";

describe("🔎 FilterBlock without Redux", () => {
  let testDate;

  beforeEach(() => {
    testDate = new Date();
  });

  test("renders p tag for Live Data option", () => {
    const dateFormat = "MMM d, yyy";
    const windData = shallow(
      <BareFilterBlock
        time={testDate}
        option={"Live Data"}
        datesFromInputs={[]}
      />
    );
    expect(windData.find("p").text()).toEqual(format(testDate, dateFormat));
  });

  test("renders DateTimeInput for other options", () => {
    const windData = shallow(
      <BareFilterBlock
        time={testDate}
        option={"Other option"}
        datesFromInputs={[]}
      />
    );
    expect(windData.find(DateInput)).toHaveLength(1);
  });
});
