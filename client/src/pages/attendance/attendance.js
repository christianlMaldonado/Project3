import React, { Component } from "react";
import "./style.css";

class Attendance extends Component {
  
  render() {
    return (
      <>
        <div className="title">Attendance</div>
        <div className="container">
          <div className="attendance"></div>
        </div>
      </>
    );
  }
}

export default Attendance;
