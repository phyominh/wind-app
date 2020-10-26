import React from "react";
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";

import { CHOOSE_OPTION, chooseOption } from "../actions.js";
import FilterButton, {
  FilterButton as BareFilterButton,
} from "./FilterButton.js";

describe("🎛️ FilterButton without Redux", () => {
  const mockItems = ["a", "b", "c"];
  let filterButton;

  beforeEach(() => {
    filterButton = shallow(
      <BareFilterButton items={mockItems} option={mockItems[0]} />
    );
  });

  test("initially does not render dropdown", () => {
    expect(filterButton.find("#filter-options")).toHaveLength(0);
  });

  test("renders the given list in dropdown when clicked", () => {
    filterButton
      .find(".dropdown")
      .simulate("click", { stopPropagation: () => {} });
    expect(filterButton.find("#filter-options .dropdown-item")).toHaveLength(
      mockItems.length
    );
    expect(
      filterButton
        .find("#filter-options .dropdown-item")
        .first()
        .find("is-active")
    ).toBeTruthy();
  });
});

describe("🎛️🔗 FilterButton with Redux", () => {
  const mockStore = configureStore();
  const initialState = { option: "a" };

  let filterButton, store;

  beforeEach(() => {
    store = mockStore(initialState);
    filterButton = mount(<FilterButton store={store} />);
  });

  afterEach(() => {
    filterButton.unmount();
  });

  test("renders with initial state and does not show dropdown", () => {
    expect(filterButton.find(BareFilterButton).prop("option")).toEqual(
      initialState.option
    );
    expect(filterButton.find("button").text()).toEqual(initialState.option);
    expect(filterButton.find("#filter-options")).toHaveLength(0);
  });

  test("dispatches the respective action when an option is selected and stores the actions in the store", () => {
    store.dispatch(chooseOption("b"));
    store.dispatch(chooseOption("c"));

    let actions = store.getActions();
    expect(actions[0].type).toEqual(CHOOSE_OPTION);
    expect(actions[1].type).toEqual(CHOOSE_OPTION);
    expect(actions[0].option).toEqual("b");
    expect(actions[1].option).toEqual("c");
  });
});
