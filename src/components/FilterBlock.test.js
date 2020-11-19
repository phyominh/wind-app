import React from "react";
import { shallow } from "enzyme";

import CurrentDate from "./CurrentDate.js";
import DateInput from "./DateInput.js";
import { FilterBlock as BareFilterBlock } from "./FilterBlock.js";

describe("🔎 FilterBlock without Redux", () => {
  test("renders CurrentDate for Live Data option", () => {
    const filterBlock = shallow(
      <BareFilterBlock option={"Live Data"} datesFromInputs={[]} />
    );
    expect(filterBlock.find(CurrentDate)).toBeTruthy();
  });

  test("renders DateTimeInput for other options", () => {
    const filterBlock = shallow(
      <BareFilterBlock option={"Other option"} datesFromInputs={[]} />
    );
    expect(filterBlock.find(DateInput)).toHaveLength(1);
  });
});
