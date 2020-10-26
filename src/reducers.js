import { CHOOSE_OPTION } from "./actions.js";
import options from "./components/FilterOptions.js";

const optionReducer = (state = { option: options[0] }, { type, option }) => {
  switch (type) {
    case CHOOSE_OPTION:
      return { option: option };
    default:
      return state;
  }
};

const rootReducer = optionReducer;

export default rootReducer;
