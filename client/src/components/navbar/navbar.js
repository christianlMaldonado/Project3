import React, { useState } from "react";
import "./style.css";
import logout from "../../helpers/logout";

function Navbar() {
  const [isShown, setIsShown] = useState(false);
  return (
    <>
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
                {isShown && <span className="addedLink"> Home</span>}
              </i>
            </li>{" "}
          </a>
          <a href="/grades">
            <li>
              <i className="fa fa-check-square" data-hover="Grades">
                {isShown && <span className="addedLink"> Grades</span>}
              </i>
            </li>
          </a>
          <a href="/attendance">
            <li>
              <i className="fa fa-calendar" data-hover="Attendance">
                {isShown && <span className="addedLink"> Attendance</span>}
              </i>
            </li>
          </a>
          <a href="/assignments">
            <li>
              <i className="fa fa-pencil" data-hover="Assignments">
                {isShown && <span className="addedLink"> Assignments</span>}
              </i>
            </li>
          </a>
          <a href="/virtual">
            <li>
              <i className="fa fa-comments" data-hover="Virtual">
                {isShown && <span className="addedLink"> Virtual</span>}
              </i>
            </li>
          </a>
        </ul>
        <ul className="logout">
          <a href="/" onClick={logout}>
            <li>
              <i className="fa fa-sign-out" data-hover="Assignments">
                {isShown && <span className="addedLink"> Sign Out</span>}
              </i>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
