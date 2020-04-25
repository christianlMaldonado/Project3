import React from "react";
import "./style.css";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">
            <i class="fa fa-home">
              <p className="show"></p>
            </i>
          </a>
        </li>
        <li>
          <a href="/grades">
            <i class="fa fa-check-square">
              <p className="show">Grades</p>
            </i>
          </a>
        </li>
        <li>
          <a href="/attendance">
            <i class="fa fa-calendar">
              <p className="show"></p>
            </i>
          </a>
        </li>
        <li>
          <a href="/assignments">
            <i class="fa fa-pencil">
              <p className="show"></p>
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
