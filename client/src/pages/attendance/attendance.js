import React, { Component } from "react";
import "./style.css";
// import { Form, Btn } from "../../components/Form";
import { Container, Tbl, TBody, Row, Header, Cell } from "../../components/tables/index";
import Paper from "@material-ui/core/Paper";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";

class Attendance extends Component {
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
        this.props.history.push("/");
      });
  }

  studentCheckIn = () => {
    const studentCheckIn = {
      name: this.state.user.username,
    };
    API.checkIn(studentCheckIn).then((res) => {
      console.log(res);
      return <h3>You are checked as present!</h3>;
    });
  };

  takeAttendance = () => {
    API.takeAttendance().then((res) => {
      console.log(res);
    });
  };

  render() {
    if (this.state.user !== undefined) {
      return (
        <>
          <div className="title">Attendance</div>
          <div className="container">
            <div className="attendance">
              <div className="table-container">
                {this.state.user.isStudent ? (
                  <button onClick={this.studentCheckIn}>Check In</button>
                ) : (
                  <>
                    <button onClick={this.takeAttendance}>Take Attendance</button>
                    <Container component={Paper}>
                      <Tbl>
                        <Header>
                          <Row>
                            <Cell>
                              <b>Student</b>
                            </Cell>
                            <Cell align="right">
                              <b>Present</b>
                            </Cell>
                          </Row>
                        </Header>
                        <TBody>
                          <Row>
                            <Cell></Cell>
                            <Cell></Cell>
                          </Row>
                        </TBody>
                      </Tbl>
                    </Container>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <h1>Loading</h1>;
    }
  }
}

export default Attendance;
