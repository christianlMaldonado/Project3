import React, { Component } from "react";
import "./style.css";
import Tiles from "../../components/tiles";
import home from "../../utilities/home.json";
import stuHome from "../../utilities/stu-home.json";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";
import Loading from "../../components/loading/loading";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { home, stuHome, user: undefined };
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
    if (this.state.user !== undefined) {
      return (
        <div className="home">
          <div className="title">
            {" "}
            <img
              alt="logo"
              className="logo-size"
              src={process.env.PUBLIC_URL + "/images/ramLogo.png"}
            ></img>{" "}
            Welcome, {this.state.user.name}
          </div>
          <div className="container">
            {!this.state.user.isStudent
              ? this.state.home.map((data) => (
                  <Tiles
                    key={data.id}
                    url={data.url}
                    name={data.name}
                    image={data.image}
                  />
                ))
              : this.state.stuHome.map((data) => (
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

export default Home;
