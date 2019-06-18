import React, { useState } from "react";
import "./index.scss";

const initialState = {
  status: false
};

function RadioStyled() {
  const [state, setstate] = useState(initialState);

  return (
    <>
      <div className="radio-styled">
        <label className="radio-styled__check-container">
          Option 1
          <input
            type="radio"
            name="name"
            value="value1"
            checked={state.status}
            onChange={e =>
              setstate(prevState => {
                return !prevState;
              })
            }
          />
          <span className="radio-styled__checkmark" />
        </label>
        <label className="radio-styled__check-container">
          Option 2
          <input
            type="radio"
            name="name"
            value="value2"
            checked={state.status}
            onChange={e =>
              setstate(prevState => {
                return !prevState;
              })
            }
          />
          <span className="radio-styled__checkmark" />
        </label>
      </div>
    </>
  );
}

export default RadioStyled;
