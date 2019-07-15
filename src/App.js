import React from "react";
import Home from "./components/pages/Home";
import Clock from "./components/pages/Clock";
import Title from "./components/layout/Title";
import TimerState from "./context/timer/TimerState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/scss/App.scss";

function App() {
  return (
    <TimerState>
      <div id="App" className="flex flex-column">
        <Title />
        <div className="container">
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/clock" component={Clock} />
            </Switch>
          </Router>
        </div>
      </div>
    </TimerState>
  );
}

export default App;
