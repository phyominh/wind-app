const CHOOSE_OPTION = "CHOOSE_OPTION";

const chooseOption = (option) => {
  return { type: CHOOSE_OPTION, option: option };
};

export { CHOOSE_OPTION, chooseOption };
