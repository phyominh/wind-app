import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { shallow } from "enzyme";
import configureStore from "redux-mock-store";

import App from "./App.js";

describe("App", () => {
  const mockStore = configureStore();
  const store = mockStore({});
  const app = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  test("renders an HTML element and removes it", () => {
    const div = document.createElement("div");
    ReactDOM.render(app, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
