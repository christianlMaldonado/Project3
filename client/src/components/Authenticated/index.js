import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import getJwt from "../../helpers/jwt";
import API from "../../utilities/API";
import Loading from "../loading/loading";

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
          <Loading />
        </div>
      );
    }

    return <>{this.props.children}</>;
  }
}

export default withRouter(Authenticated);
