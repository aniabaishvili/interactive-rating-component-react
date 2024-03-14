import "./Rate.css";
import logo from "/images/icon-star.svg";
import { useState } from "react";

function Rate({ setSubmit, rate, setRate }) {
  let buttons = [1, 2, 3, 4, 5];
  console.log(rate);
  return (
    <div className="rate-container">
      <img src={logo} />
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="btn-container">
        {buttons.map((button) => (
          <button
            className="rate-btn"
            onClick={() => setRate(button)}
            key={button}
            style={
              rate == button
                ? { backgroundColor: "#7C8798", color: "white" }
                : {}
            }
          >
            {button}
          </button>
        ))}
      </div>
      <button
        className="submit"
        onClick={() => {
          rate && setSubmit(true);
        }}
      >
        SUBMIT
      </button>
    </div>
  );
}

export default Rate;
