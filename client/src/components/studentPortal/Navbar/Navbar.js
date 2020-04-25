import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <a href="" className="brand-logo"></a>
                <ul className="left">
                    <li><a href="">Grades</a></li>
                    <li><a href="">Assignments</a></li>
                    <li><a href="">Attendance</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar