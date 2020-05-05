import React, { Component } from "react";
import "./style.css";
import Tables from "../../components/tables/tables";

class Assignments extends Component {
  render() {
    return (
      <>
        <div className="title">Assignments</div>
        <div className="container">
          <div className="assignments">
            <Tables />
          </div>
        </div>
      </>
    );
  }
}

export default Assignments;
