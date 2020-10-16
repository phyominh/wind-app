import React from "react";
import { act } from "react-dom/test-utils";
import { addHours, addMinutes, addSeconds, format, getSeconds } from "date-fns";
import { mount } from "enzyme";

import Dashboard from "./Dashboard.js";

describe("Dashboard", () => {
  const timeFormat = "h:mm a";

  let dashboard, testDate;

  beforeEach(() => {
    dashboard = mount(<Dashboard />);
    testDate = new Date();
    jest.useFakeTimers("modern");
  });

  afterEach(() => {
    dashboard.unmount();
    jest.clearAllTimers();
  });

  describe("Passing data to StatusBar", () => {
    test("renders formatted time in StatusBar", () => {
      expect(
        dashboard
          .find(".status-bar .column.is-3")
          .at(0)
          .find(".status-value")
          .text()
      ).toEqual(format(testDate, timeFormat));
    });

    test("renders formatted time only if minute or hour changes", () => {
      if (getSeconds(testDate) == 59) {
        act(() => jest.advanceTimersByTime(1000));
        addSeconds(testDate, 1);
      }

      // since the clock in StatusBar updates at a minute interval increasing a second to the timer should not update the component
      act(() => jest.advanceTimersByTime(1000));

      const renderedTime = dashboard
        .find(".status-bar .column.is-3")
        .at(0)
        .find(".status-value")
        .text();
      expect(renderedTime).toEqual(format(testDate, timeFormat));

      // 1 minute added and the component should now be updated
      act(() => jest.advanceTimersByTime(60000));

      const renderedTimeAfterOneMin = dashboard
        .find(".status-bar .column.is-3")
        .at(0)
        .find(".status-value")
        .text();
      expect(renderedTimeAfterOneMin).not.toEqual(renderedTime);

      // add 1 hour
      act(() => jest.advanceTimersByTime(3600000));

      const renderedTimeAfterOneHour = dashboard
        .find(".status-bar .column.is-3")
        .at(0)
        .find(".status-value")
        .text();
      expect(renderedTimeAfterOneHour).not.toEqual(renderedTime);
      expect(renderedTimeAfterOneHour).not.toEqual(renderedTimeAfterOneMin);
    });
  });
});
