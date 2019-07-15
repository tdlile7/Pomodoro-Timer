import React from "react";
import {
  handleTimeUpdate as onTimeUpdate,
  generateDisplay
} from "../../assets/js/timer";

const Timer = ({ timer, setTime }) => {
  // Converts time object into a string with a clock display format
  let display = generateDisplay({
    minutes: timer.minutes,
    seconds: timer.seconds
  });

  let payload = {
    timer,
    setTime
  };

  return (
    <div className="timer grid-3">
      <div className="timer__name flex">{timer.name}</div>
      <div className="timer__display flex">{display}</div>
      <div className="timer__buttons flex">
        <button
          onClick={() => onTimeUpdate({ ...payload, action: "decrease" })}
          className="btn"
        >
          -
        </button>
        <button
          onClick={() => onTimeUpdate({ ...payload, action: "increase" })}
          className="btn"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Timer;
