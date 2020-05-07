import React, { Component } from "react";
import "./style.css";
import { Container, TBody, Row, Header, Cell, Tbl } from "../../components/tables/index";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";

class Assignments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      link: "",
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
        console.log(this.state.user);
      })
      .catch((err) => {
        // localStorage.removeItem("id_token");
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
    console.log(this.state.link);
    const homeworkLink = {
      link: this.state.link,
    };
    API.submitHomework(id, homeworkLink).then((res) => console.log(res));
  };

  render() {
    if (this.state.user !== undefined) {
      return (
        <>
          <div className="title">Assignments</div>
          <div className="container">
            <div className="assignments">
              <div className="table-container">
                <Container component={Paper}>
                  <Tbl>
                    <Header>
                      <Row>
                        <Cell>
                          <b>Assignment</b>
                        </Cell>
                        <Cell align="right">
                          <b>Submit Link</b>
                        </Cell>
                        <Cell align="right">
                          <b>Description</b>
                        </Cell>
                      </Row>
                    </Header>

                    <TBody>
                      {this.state.user.isStudent ? (
                        this.state.user.student.schoolWork.map((homework) => (
                          <Row key={homework._id}>
                            <Cell key={homework.assignment.name}>
                              <b>{homework.assignment.name}</b>
                            </Cell>
                            <Cell>
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
                                Submit Link
                              </Button>
                            </Cell>
                            <Cell align="right" key={homework.assignment.description}>
                              <b>{homework.assignment.description}</b>
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
      return <div>loding</div>;
    }
  }
}

export default Assignments;
