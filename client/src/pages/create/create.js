import React, { Component } from "react";
import "./style.css";
import { Form, Input, Text, Btn } from "../../components/Form";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      assignment: "",
      description: "",
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
  render() {
    return (
      <>
        <div className="title">Create an Assignment</div>
        <div className="container">
          <div className="create">
            <Form>
              <Input
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
              >
                Create Assignment
              </Btn>
            </Form>
          </div>
        </div>
      </>
    );
  }
}

export default Create;
