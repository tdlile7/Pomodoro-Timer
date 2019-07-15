//Updates a timer
export const handleTimeUpdate = payload => {
  const { action, timer, setTime } = payload;
  const { seconds, minutes } = timer;
  const updatedTime = { ...timer };

  //Updates timers in response to increment events are triggered
  if (action === "increase") {
    if (seconds === 59) {
      updatedTime.seconds = 0;
      updatedTime.minutes = minutes + 1;
    } else {
      updatedTime.seconds = seconds + 1;
    }
  }

  //Updates timers in response to decrement events are triggered
  if (action === "decrease") {
    if (seconds === 0 && minutes === 0) {
      return;
    } else if (seconds === 0) {
      updatedTime.seconds = 59;
      updatedTime.minutes = minutes - 1;
    } else {
      updatedTime.seconds = seconds - 1;
    }
  }

  setTime(updatedTime);
};

//Generates clock format display of the time
export const generateDisplay = time => {
  if (time.seconds < 10) {
    return `${time.minutes}:0${time.seconds}`;
  } else {
    return `${time.minutes}:${time.seconds}`;
  }
};
