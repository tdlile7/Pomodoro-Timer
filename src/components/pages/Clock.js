import React, { useState, useEffect, useRef, useContext } from "react";
import TimerContext from "../../context/timer/timerContext";
import { handleTimeUpdate, generateDisplay } from "../../assets/js/timer";
import { Link } from "react-router-dom";
import beep from "../../assets/sounds/beep.mp3";

const Clock = () => {
  const timerContext = useContext(TimerContext);
  const beepRef = useRef();

  // State
  const {
    studyDuration,
    shortBreak,
    longBreak,
    playSound,
    setPlaySound
  } = timerContext;
  const [timerSelected, setTimerSelected] = useState(0);
  const [counter, setCounter] = useState({ ...studyDuration });
  const [pause, setPause] = useState(false);
  const [breakCount, setBreakCount] = useState(0);

  // Variables
  let display = generateDisplay(counter);
  let onBreak = timerSelected === 1 ? true : false;
  let clockClasses = onBreak ? "pomodoro section grid-1" : "section grid-1";

  // Changes the selected timer to display
  useEffect(() => {
    if (timerSelected === 0) setCounter({ ...studyDuration });
    if (timerSelected === 1) setCounter({ ...shortBreak });
    if (timerSelected === 2) setCounter({ ...longBreak });
    // eslint-disable-next-line
  }, [timerSelected]);

  //Initiates time countdown
  useEffect(() => {
    let payload = { timer: counter, setTime: setCounter, action: "decrease" };
    let id;

    // If the timer is neither zero or paused, the timer will continue to countdown
    if ((counter.minutes !== 0 || counter.seconds !== 0) && !pause) {
      // Plays beep audio during the last five seconds of timer countdown
      if (playSound && counter.minutes === 0 && counter.seconds < 6) {
        beepRef.current.play();
      }
      id = setTimeout(() => {
        handleTimeUpdate(payload);
      }, 1000);
    } else if (counter.minutes === 0 && counter.seconds === 0) {
      //Once countdown is complete, switches to next timer
      if (onBreak) setTimerSelected(0);
      else {
        // If user has taken 4 small breaks the next break will be a long break
        if (breakCount < 4) {
          setTimerSelected(1);
          setBreakCount(breakCount + 1);
        } else {
          // After taking a long break the pomodoro cycle is reset
          setTimerSelected(2);
          setBreakCount(0);
        }
      }
    }

    return () => {
      clearTimeout(id);
    };
    // eslint-disable-next-line
  }, [counter, pause]);

  let displayTimeClasses =
    counter.minutes === 0 && counter.seconds < 6
      ? "display__time txt-countdown"
      : "display__time";

  const resetSoundState = () => {
    setPlaySound(false);
  };

  return (
    <div id="clock" className={clockClasses}>
      <audio ref={beepRef} src={beep} type="audio/mp3" />
      <div className="display flex flex-column">
        <div className="display__name">{onBreak ? "Break" : "Work"}</div>
        <div className={displayTimeClasses}>{display}</div>
      </div>
      <div className="options flex">
        <Link to="/">
          <button onClick={resetSoundState} className="options__btn btn">
            Reset
          </button>
        </Link>
        {!pause ? (
          <button className="options__btn btn" onClick={() => setPause(true)}>
            Pause
          </button>
        ) : (
          <button className="options__btn btn" onClick={() => setPause(false)}>
            Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default Clock;
