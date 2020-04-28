import React from 'react';
import Navbar from "./components/studentPortal/Navbar/Navbar";
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './pages/studentPortal/Home/Home'
import Grades from './pages/studentPortal/Grades/Grades'
import Assignments from './pages/studentPortal/Assignments/Assignments'
import Attendance from './pages/studentPortal/Attendance/Attendance'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/grades' component={Grades} />
      <Route path='/assignments' component={Assignments} />
      <Route path='/attendance' component={Attendance} />
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
