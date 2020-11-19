import React from "react";
import { shallow } from "enzyme";
import { parse } from "date-fns";

import CurrentDate, { dateFormat } from "./CurrentDate.js";

describe("📅 CurrentDate", () => {
  test("checks for date render string", () => {
    const currentDate = shallow(<CurrentDate />);
    const dateObj = parse(currentDate.find("p").text(), dateFormat, new Date());
    expect(dateObj).toBeInstanceOf(Date);
  });
});
