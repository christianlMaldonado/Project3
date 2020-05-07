import React, { useState } from "react";
import "./style.css";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <div
      className="nav"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <ul>
        {" "}
        <a href="/home">
          <li>
            <i className="fa fa-home" data-hover="Home">
              {isShown && "  Home"}
            </i>
          </li>{" "}
        </a>
        <a href="/grades">
          <li>
            <i className="fa fa-check-square" data-hover="Grades">
              {isShown && "  Grades"}
            </i>
          </li>
        </a>
        <a href="/attendance">
          <li>
            <i className="fa fa-calendar" data-hover="Attendance">
              {isShown && "  Attendance"}
            </i>
          </li>
        </a>
        <a href="/assignments">
          <li>
            <i className="fa fa-pencil" data-hover="Assignments">
              {isShown && "  Assignments"}
            </i>
          </li>
        </a>
      </ul>
      <ul className="logout">
        <a href="/" onclick="logout()">
          <li>
            <i className="fa fa-sign-out" data-hover="Assignments">
              {isShown && "  Sign Out"}
            </i>
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
