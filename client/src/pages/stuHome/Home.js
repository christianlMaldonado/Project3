import React, { Component } from "react";
import "./style.css";
import Tiles from "../../components/tiles";
import home from "../../utilities/stu-home.json";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";

class studentHome extends Component {
  constructor(props) {
    super(props);
    this.state = { home, user: undefined, redirect: null };
  }
  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push("/");
    }
    API.userPortal(jwt)
      .then((res) => {
        this.setState({
          user: res.data.user,
        });
      })
      .catch((err) => {
        this.props.history.push("/");
      });
  }

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
