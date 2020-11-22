import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { parse, subDays } from "date-fns";
import DatePicker from "../utils/react-mobile-datepicker.min.js";

import { confirmDate, clearIndexDate, resetDate } from "../actions.js";
import { options } from "../utils/appUtils.js";

const DateDialog = ({
  selection,
  config,
  inputIndex,
  inputValue,
  dialogState,
  dispatch,
}) => {
  const { minDate, maxDate, sliderConfig } = config;
  const parsedMinDate = parse(minDate, "yyyy-M-d", new Date());
  let parsedMaxDate = parse(maxDate, "yyyy-M-d", new Date());
  // take one day off from the first input
  // so that range selection has at least one day difference
  if (!inputValue && selection == options.RANGE_DATA && inputIndex == 0) {
    parsedMaxDate = subDays(parsedMaxDate, 1);
  }

  const initialValue =
    inputValue !== undefined && inputValue
      ? parse(inputValue, "yyyy-M-d", new Date())
      : parsedMinDate;

  const header = (text) => {
    return <h3 className="is-size-3">{text}</h3>;
  };

  const confirm = (
    <button className="button is-primary is-small">Confirm</button>
  );
  const clear = (
    <button className="button is-secondary is-active is-small">Clear</button>
  );

  const handleSelect = (date) => {
    dispatch(confirmDate(inputIndex, date));
    dialogState(false);
  };

  const handleCancel = () => {
    if (inputIndex == 0) {
      dispatch(resetDate());
    } else {
      dispatch(clearIndexDate(inputIndex));
    }
    dialogState(false);
  };

  return (
    <div className="modal date-dialog is-active is-clipped">
      <div
        className="modal-background"
        onClick={() => dialogState(false)}
      ></div>
      <div className="modal-content">
        <div className="box">
          <div className="modal-wrap">
            <DatePicker
              dateConfig={sliderConfig}
              isPopup={false}
              min={parsedMinDate}
              max={parsedMaxDate}
              value={initialValue}
              customHeader={header(selection)}
              confirmButton={confirm}
              cancelButton={clear}
              onSelect={handleSelect}
              onCancel={handleCancel}
            />
          </div>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={() => dialogState(false)}
      ></button>
    </div>
  );
};

DateDialog.propTypes = {
  selection: PropTypes.string,
  config: PropTypes.object,
  inputIndex: PropTypes.number,
  inputValue: PropTypes.string,
  dialogState: PropTypes.func,
  dispatch: PropTypes.func,
};

export default connect()(DateDialog);
