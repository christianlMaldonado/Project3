import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Grades from "./components/grades/grades";
import Attendance from "./components/attendance/attendance";
import Assignments from "./components/assignments/assignments";
import Mail from "./components/mail/mail";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/grades" component={Grades} />
            <Route exact path="/attendance" component={Attendance} />
            <Route exact path="/assignments" component={Assignments} />
            <Route exact path="/mail" component={Mail} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
