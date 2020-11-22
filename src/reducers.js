import { combineReducers } from "redux";

import {
  CHOOSE_OPTION,
  CONFIRM_DATE,
  CLEAR_INDEX_DATE,
  RESET_DATE,
} from "./actions.js";
import { options } from "./utils/appUtils.js";

const optionReducer = (state = options.LIVE_DATA, { type, option }) => {
  switch (type) {
    case CHOOSE_OPTION:
      return option;
    default:
      return state;
  }
};

const dateReducer = (state = [], { type, inputIndex, selectedDate }) => {
  switch (type) {
    case CONFIRM_DATE: {
      const datesFromInputs = [...state];
      datesFromInputs[inputIndex] = selectedDate;
      return datesFromInputs;
    }
    case CLEAR_INDEX_DATE:
      return state.slice(0, inputIndex);
    case RESET_DATE:
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  option: optionReducer,
  datesFromInputs: dateReducer,
});

export default rootReducer;
