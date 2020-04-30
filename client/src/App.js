import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Grades from "./pages/grades/grades";
import Attendance from "./pages/attendance/attendance";
import Assignments from "./pages/assignments/assignments";
import Mail from "./pages/mail/mail";
import Virtual from "./pages/virtual/virtual";
import Create from "./pages/create/create";
import Login from "./pages/login/login";
import "./App.css";

function App() {
  const LoginContainer = () => (
    <>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/login" component={Login} />
    </>
  );

  const Default = () => (
    <>
      <div>
        <Navbar />
      </div>
      <Route exact path="/home" component={Home} />
      <Route exact path="/grades" component={Grades} />
      <Route exact path="/attendance" component={Attendance} />
      <Route exact path="/assignments" component={Assignments} />
      <Route exact path="/mail" component={Mail} />
      <Route exact path="/create" component={Create} />
      <Route exact path="/virtual" component={Virtual} />
      {/* <Route component={NoMatch} /> */}
    </>
  );

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginContainer} />
            <Route component={Default} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
