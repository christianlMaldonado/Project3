import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/home">
            <i className="fa fa-home" data-hover="Home"></i>
          </a>
        </li>
        <li>
          <a href="/grades">
            <i className="fa fa-check-square" data-hover="Grades"></i>
          </a>
        </li>
        <li>
          <a href="/attendance">
            <i className="fa fa-calendar" data-hover="Attendance"></i>
          </a>
        </li>
        <li>
          <a href="/assignments">
            <i className="fa fa-pencil" data-hover="Assignments"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
