import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Grades from "./pages/grades/grades";
import Attendance from "./pages/attendance/attendance";
import Assignments from "./pages/assignments/assignments";
import Mail from "./pages/mail/mail";
import Virtual from "./pages/virtual/virtual";
import Create from "./pages/create/create";
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
            <Route exact path="/create" component={Create} />
            <Route exact path="/virtual" component={Virtual} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
