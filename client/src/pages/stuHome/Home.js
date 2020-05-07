import React, { Component } from "react";
import "./style.css";
import Tiles from "../../components/tiles";
import home from "../../utilities/stu-home.json";
import Loading from "../../components/loading/loading";
import getJwt from "../../helpers/jwt";
import API from "../../utilities/API";

class studentHome extends Component {
  constructor(props) {
    super(props);
    this.state = { home, user: undefined };
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
        // localStorage.removeItem("id_token");
        this.props.history.push("/");
      });
  }

  render() {
    if (this.state.user !== undefined) {
      return (
        <div className="home">
          <div className="title">Welcome, {this.state.user.name}</div>
          <div className="container">
            {this.state.home.map((data) => (
              <Tiles
                key={data.id}
                url={data.url}
                name={data.name}
                image={data.image}
              />
            ))}
          </div>
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default studentHome;
