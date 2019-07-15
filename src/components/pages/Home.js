import React, { useContext, useEffect, useState } from "react";
import Timer from "../timer/Timer";
import TimeContext from "../../context/timer/timerContext";
import { Link } from "react-router-dom";

const Home = () => {
  const timeContext = useContext(TimeContext);
  const {
    studyDuration,
    setStudyDuration,
    shortBreak,
    setShortBreak,
    longBreak,
    setLongBreak,
    playSound,
    setPlaySound
  } = timeContext;

  const [isChecked, setIsChecked] = useState(playSound);

  useEffect(() => {
    if (isChecked) setPlaySound(true);
    else setPlaySound(false);
  }, [isChecked, setPlaySound]);

  return (
    <div id="home" className="section grid-1">
      <div className="timers grid-1">
        <Timer timer={studyDuration} setTime={setStudyDuration} />
        <Timer timer={shortBreak} setTime={setShortBreak} />
        <Timer timer={longBreak} setTime={setLongBreak} />
      </div>

      <div className="options flex">
        <div className="options__sound flex">
          <h3>Sound</h3>
          <input onClick={() => setIsChecked(!isChecked)} type="checkbox" />
        </div>
        <Link to="/clock">
          <button className="startBtn btn">Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
