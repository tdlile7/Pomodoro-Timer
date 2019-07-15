import React, { useState } from "react";
import TimerContext from "./timerContext";

const TimerState = props => {
  const [studyDuration, setStudyDuration] = useState({
    name: "Study Duration",
    minutes: 25,
    seconds: 0
  });
  const [shortBreak, setShortBreak] = useState({
    name: "Short Break",
    minutes: 5,
    seconds: 0
  });
  const [longBreak, setLongBreak] = useState({
    name: "Long Break",
    minutes: 15,
    seconds: 0
  });

  const [playSound, setPlaySound] = useState(false);

  const contextValues = {
    studyDuration,
    setStudyDuration,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    playSound,
    setPlaySound
  };

  return (
    <TimerContext.Provider value={contextValues}>
      {props.children}
    </TimerContext.Provider>
  );
};

export default TimerState;
