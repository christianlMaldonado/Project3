import React, { Component } from "react";
import "./style.css";
import Tables from "../../components/tables/tables";

class Grades extends Component {
  
  render() {
    return (
      <>
        <div className="title">Grades</div>
        <div className="container">
          <div className="grades">
            <div className="table-container"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Grades;
