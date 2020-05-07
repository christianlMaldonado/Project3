import React from "react";
import "./Navbar.css";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="container">
                <a href="" className="brand-logo"></a>
                <ul className="left">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/grades">Grades</NavLink></li>
                    <li><NavLink to="/assignments">Assignments</NavLink></li>
                    <li><NavLink to="/attendance">Attendance</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar