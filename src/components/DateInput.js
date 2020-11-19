import React, { useState } from "react";
import PropTypes from "prop-types";

import DateDialog from "./DateDialog.js";

const DateInput = ({ selection, config, inputIndex, inputValue }) => {
  const [isDialogActive, setIsDialogActive] = useState(false);

  const showDialog = () => {
    if (!config) return;
    setIsDialogActive(true);
  };

  return (
    <div className="date-input">
      <input
        className="input is-max"
        type="text"
        placeholder={"Choose a date"}
        value={inputValue ? inputValue : ""}
        onFocus={showDialog}
        readOnly={true}
        disabled={config ? false : true}
      />
      {isDialogActive && (
        <DateDialog
          selection={selection}
          config={config}
          inputIndex={inputIndex}
          inputValue={inputValue}
          dialogState={(state) => setIsDialogActive(state)}
        />
      )}
    </div>
  );
};

DateInput.defaultProps = {
  inputIndex: 0,
};

DateInput.propTypes = {
  selection: PropTypes.string,
  config: PropTypes.object,
  inputIndex: PropTypes.number,
  inputValue: PropTypes.string,
};

export default DateInput;
