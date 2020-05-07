import React, { Component } from "react";
import "./style-create.css";
import { Form, Input, Text, Btn } from "../../components/Form";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";
import Loading from "../../components/loading/loading";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      assignment: "",
      description: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
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

  handleFormSubmit = (e) => {
    e.preventDefault();
    const schoolwork = {
      assignment: this.state.assignment,
      description: this.state.description,
    };
    API.addHomework(schoolwork).then((res) => {
      console.log(res.data.msg);
      this.setState({ assignment: "", description: "" });
    });
  };

  addStudent = (e) => {
    e.preventDefault();
    const student = {
      name: this.state.firstName,
      email: this.state.email,
      username: `${this.state.firstName} ${this.state.lastName}`,
      password: this.state.password,
    };
    API.addStudent(student).then((res) => {
      console.log(res);
      this.setState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
    });
  };
  render() {
    if (this.state.user !== undefined) {
      return !this.state.user.isStudent ? (
        <>
          <div className="title">Create</div>
          <div className="container">
            <div className="create">
              <div className="create-title">Add an Assignment</div>
              <Form>
                <Input
                  className="create-input"
                  value={this.state.assignment}
                  onChange={this.handleInputChange}
                  name="assignment"
                  placeholder="Assignment name"
                />
                <Text
                  value={this.state.description}
                  onChange={this.handleInputChange}
                  name="description"
                  placeholder="Description"
                />
                <Btn
                  disabled={!this.state.assignment || !this.state.description}
                  onClick={this.handleFormSubmit}
                  className="create-button"
                >
                  Create Assignment
                </Btn>
              </Form>

              <div className="create-title-students">Add Students</div>

              <Form>
                <Input
                  className="create-input"
                  value={this.state.firstName}
                  onChange={this.handleInputChange}
                  name="firstName"
                  placeholder="First Name"
                />
                <Input
                  className="create-input"
                  value={this.state.lastName}
                  onChange={this.handleInputChange}
                  name="lastName"
                  placeholder="Last Name"
                />
                <Input
                  className="create-input"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Student-Email"
                  type="email"
                />
                <Input
                  className="create-input"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  placeholder="Password"
                  type="password"
                />
                <Btn
                  disabled={
                    !this.state.firstName ||
                    !this.state.lastName ||
                    !this.state.password
                  }
                  onClick={this.addStudent}
                  className="create-button"
                >
                  Add Student
                </Btn>
              </Form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="title">Create an Assignment</div>
          <h3>
            Sorry {this.state.user.name}, you don't have access to this page
          </h3>
        </>
      );
    } else {
      return <Loading />;
    }
  }
}

export default Create;
