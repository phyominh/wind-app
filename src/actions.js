export const CHOOSE_OPTION = "CHOOSE_OPTION";
export const CONFIRM_DATE = "CONFIRM_DATE";
export const CLEAR_INDEX_DATE = "CLEAR_INDEX_DATE";
export const RESET_DATE = "RESET_DATE";

export const chooseOption = (option) => {
  return { type: CHOOSE_OPTION, option: option };
};

export const confirmDate = (inputIndex, selectedDate) => {
  return {
    type: CONFIRM_DATE,
    inputIndex: inputIndex,
    selectedDate: selectedDate,
  };
};

export const clearIndexDate = (inputIndex) => {
  return {
    type: CLEAR_INDEX_DATE,
    inputIndex: inputIndex,
  };
};

export const resetDate = () => {
  return { type: RESET_DATE };
};
