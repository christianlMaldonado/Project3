import React, { Component } from "react";
import "./style.css";
import Tiles from "../../components/tiles";
import home from "../../home.json";

class studentHome extends Component {
  state = { home };

  render() {
    return (
      <div className="home">
        <div className="title">Welcome, "code for name here"</div>
        <div className="container">
          {this.state.home.map((data) => (
            <Tiles key={data.id} url={data.url} name={data.name} />
          ))}
        </div>
      </div>
    );
  }
}

export default studentHome;
