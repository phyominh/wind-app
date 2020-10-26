import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App.js";
import configureStore from "./configureStore.js";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
