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
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";
import Loading from "../../components/loading/loading";

class Assignments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      link: "",
      students: undefined,
      grade: undefined,
      message: "",
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

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (id) => {
    const homeworkLink = {
      id,
      link: this.state.link,
      user: this.state.user,
    };
    API.submitHomework(homeworkLink).then((res) => {
      console.log(res);
      this.setState({ link: null, message: "Homework Submitted" });
    });
  };

  seeAssignments = () => {
    API.takeAttendance().then((res) => {
      this.setState({
        students: res.data,
      });
    });
  };

  submitGrade = (student) => {
    const homework = {
      student: student.username,
      assignment: student.assignment,
      grade: this.state.grade,
    };

    API.gradeAssignment(homework).then((res) => {
      this.setState({
        grade: undefined,
        message: "Grade Updated",
      });
    });
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
            Assignments
          </div>
          <div className="container">
            <div className="assignments">
              <div className="table-container">
                {this.state.user.isStudent ? (
                  <Container component={Paper}>
                    <Tbl>
                      <Header>
                        <Row>
                          <Cell>
                            <b>Assignment</b>
                          </Cell>
                          <Cell align="left">
                            <b>Link</b>
                          </Cell>
                          <Cell align="right">
                            <b>Description</b>
                          </Cell>
                        </Row>
                      </Header>

                      <TBody>
                        {this.state.user.student.schoolWork.map((homework) => (
                          <Row key={homework._id}>
                            <Cell key={homework.assignment.name}>
                              <b>{homework.assignment.name}</b>
                            </Cell>
                            <Cell align="left">
                              <TextField
                                onChange={this.handleInputChange}
                                required
                                fullWidth
                                label="Link"
                                name="link"
                              />
                              <Button
                                onClick={() => this.handleSubmit(homework._id)}
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submitLogin"
                              >
                                Link
                              </Button>
                            </Cell>
                            <Cell
                              align="right"
                              key={homework.assignment.description}
                            >
                              <b>{homework.assignment.description}</b>
                            </Cell>
                          </Row>
                        ))}
                      </TBody>
                    </Tbl>
                  </Container>
                ) : (
                  <>
                    <Button
                      className="see-assignments"
                      variant="contained"
                      color="primary"
                      onClick={this.seeAssignments}
                      style={{ marginBottom: "40px" }}
                    >
                      See Assignments
                    </Button>
                    <Container component={Paper}>
                      <Tbl>
                        <Header>
                          <Row>
                            <Cell>
                              <b>Student</b>
                            </Cell>
                            <Cell>
                              <b>Assignment</b>
                            </Cell>
                            <Cell>
                              <b>Link</b>
                            </Cell>
                            <Cell>
                              <b>Input Grade</b>
                            </Cell>
                          </Row>
                        </Header>
                        <TBody>
                          {this.state.students ? (
                            this.state.students.map((student) => {
                              return student.student.schoolWork.map(
                                (assignment) => (
                                  <Row key={Math.floor(Math.random() * 100000)}>
                                    <Cell
                                      key={Math.floor(Math.random() * 100000)}
                                    >
                                      <b>{student.name}</b>
                                    </Cell>
                                    <Cell
                                      key={Math.floor(Math.random() * 100000)}
                                    >
                                      <b>{assignment.assignment.name}</b>
                                    </Cell>
                                    <Cell
                                      key={Math.floor(Math.random() * 100000)}
                                    >
                                      <b>{assignment.assignment.link}</b>
                                    </Cell>
                                    <Cell>
                                      <TextField
                                        lable="grade"
                                        type="number"
                                        name="grade"
                                        onChange={this.handleInputChange}
                                      />
                                      <Button
                                        variant="outlined"
                                        onClick={() =>
                                          this.submitGrade({
                                            username: student.username,
                                            assignment:
                                              assignment.assignment.name,
                                          })
                                        }
                                      >
                                        Submit Grade
                                      </Button>
                                    </Cell>
                                  </Row>
                                )
                              );
                            })
                          ) : (
                            <Row></Row>
                          )}
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
      return <Loading />;
    }
  }
}

export default Assignments;
