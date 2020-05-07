import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import getJwt from "../../helpers/jwt";
import API from "../../utilities/API";
import "./style.css";

class Authenticated extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
    };
  }
  componentDidMount() {
    const jwt = getJwt();
    if (!jwt) {
      this.props.history.push("/");
    }
    API.userPortal(jwt)
      .then((res) =>
        this.setState({
          user: res.data,
        })
      )
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("id_token");
        this.props.history.push("/");
      });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <div className="load-screen">
            <h1>Loading</h1>
          </div>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default withRouter(Authenticated);
