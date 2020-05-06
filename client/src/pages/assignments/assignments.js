import React, { Component } from "react";
import "./style.css";
// import { Container, TBody, Row, Header, Cell } from "../../components/tables/index";

class Assignments extends Component {
  render() {
    return (
      <>
        <div className="title">Assignments</div>
        <div className="container">
          <div className="assignments"></div>
        </div>
      </>
    );
  }
}

export default Assignments;
