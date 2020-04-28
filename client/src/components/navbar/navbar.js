import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">
            <i class="fa fa-home" data-hover="Home"></i>
          </a>
        </li>
        <li>
          <a href="/grades">
            <i class="fa fa-check-square" data-hover="Grades"></i>
          </a>
        </li>
        <li>
          <a href="/attendance">
            <i class="fa fa-calendar" data-hover="Attendance"></i>
          </a>
        </li>
        <li>
          <a href="/assignments">
            <i class="fa fa-pencil" data-hover="Assignments"></i>
          </a>
        </li>

        <li>
          <a href="/mail">
            <i class="fa fa-envelope" data-hover="Mail"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
