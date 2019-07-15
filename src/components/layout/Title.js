import React from "react";

const Title = () => {
  return (
    <div className="title flex">
      Pomodoro Timer
      <i className="title__icon fa fa-info-circle" aria-hidden="true" />
      <p className="title__info flex flex-column">
        The Pomodoro method is an interval-based time management technique meant
        to optimize one's productivity.
        <br />
        <br />A Pomodoro interval typically refers to a 25-30 mins study/work
        session. Following each session, is a short 3-5 mins break. After
        completing your fourth Pomodoro, the break is increased, typically to
        15-20 mins.
      </p>
    </div>
  );
};

export default Title;
