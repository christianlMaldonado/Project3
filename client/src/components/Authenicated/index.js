import React, { Component } from "react";
import getJwt from "../../helpers/jwt";
import API from "../../utilities/API";

class Authenicated extends Component {
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
        localStorage.removeItem("id_token");
        this.props.history.push("/");
      });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading ...</h1>
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default Authenicated;
