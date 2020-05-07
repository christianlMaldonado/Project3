import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Authenticated from "./components/Authenticated";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import Grades from "./pages/grades/grades";
import Attendance from "./pages/attendance/attendance";
import Assignments from "./pages/assignments/assignments";
import Virtual from "./pages/virtual/virtual";
import Create from "./pages/create/create";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import "./App.css";

function App() {
  const LoginContainer = () => (
    <>
      <Route exact path="/" render={() => <Redirect to="/" />} />
      <Route path="/" component={Login} />
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
      <Route exact path="/create" component={Create} />
      <Route exact path="/virtual" component={Virtual} />
    </>
  );

  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route exact path="/register" component={Register} />
            <Authenticated>
              <Route component={Default} />
            </Authenticated>
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
