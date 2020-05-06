import React, { Component } from "react";
import "./style.css";
import { Container, TBody, Row, Header, Cell } from "../../components/tables/index";
import Table from "@material-ui/core/Table";
import API from "../../utilities/API";
import getJwt from "../../helpers/jwt";

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

  render() {
    if (this.state.user !== undefined) {
      return (
        <>
          <div className="title">Grades</div>
          <div className="container">
            <div className="grades">
              <div className="table-container">
                <Container>
                  <Table>
                    <Header>
                      <Row>
                        <Cell>
                          <p>Assignment</p>
                        </Cell>
                        <Cell>
                          <p>Grade</p>
                        </Cell>
                      </Row>
                    </Header>

                    <TBody>
                      {this.state.user.isStudent ? (
                        this.state.user.student.schoolWork.map((homework) => (
                          <Row key={homework.assignment._id}>
                            <Cell>{homework.assignment.name}</Cell>
                            <Cell>{homework.assignment.grade}</Cell>
                          </Row>
                        ))
                      ) : (
                        <Row>
                          <Cell>
                            <p>No Assingments</p>
                          </Cell>
                        </Row>
                      )}
                    </TBody>
                  </Table>
                </Container>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <h1>state not loading</h1>;
    }
  }
}

export default Grades;
