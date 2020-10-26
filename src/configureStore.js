import { createStore } from "redux";

import rootReducer from "./reducers.js";

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
