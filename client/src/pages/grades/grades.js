import React, { Component } from "react";
import "./style.css";
import {
  Container,
  Tbl,
  TBody,
  Row,
  Header,
  Cell,
} from "../../components/tables/index";
import Paper from "@material-ui/core/Paper";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";
import Loading from "../../components/loading/loading";

class Grades extends Component {
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

  getAssignments = () => {
    API.getHomework();
  };

  render() {
    if (this.state.user !== undefined) {
      return (
        <>
          <div className="title">
            {" "}
            <img
              alt="logo"
              className="logo-size"
              src={process.env.PUBLIC_URL + "/images/ramLogo.png"}
            ></img>{" "}
            <span className="top-title-create">Assignments</span>
          </div>
          <div className="container">
            <div className="grades">
              <div className="table-container">
                <Container component={Paper}>
                  <Tbl>
                    <Header>
                      <Row>
                        <Cell>
                          <b>Assignment</b>
                        </Cell>
                        <Cell align="right">
                          <b>Link</b>
                        </Cell>
                        <Cell align="right">
                          <b>Grade</b>
                        </Cell>
                      </Row>
                    </Header>

                    <TBody>
                      {this.state.user.isStudent ? (
                        this.state.user.student.schoolWork.map((homework) => (
                          <Row key={homework.assignment._id}>
                            <Cell key={homework.assignment.name}>
                              <b>{homework.assignment.name}</b>
                            </Cell>
                            <Cell align="right" key={homework.assignment.link}>
                              <b>{homework.assignment.link}</b>
                            </Cell>
                            <Cell align="right" key={homework.assignment.grade}>
                              <b>{homework.assignment.grade}</b>
                            </Cell>
                          </Row>
                        ))
                      ) : (
                        <Row>
                          <Cell align="right">
                            <b>No Assignments</b>
                          </Cell>
                        </Row>
                      )}
                    </TBody>
                  </Tbl>
                </Container>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <Loading />;
    }
  }
}

export default Grades;
