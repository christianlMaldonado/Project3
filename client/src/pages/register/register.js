import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/copyright/copyright";
import "./style.css";
import API from "../../utilities/API";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    API.registerTeacher({
      email: this.state.email,
      password: this.state.password,
      isStudent: false,
      name: this.state.firstName + " " + this.state.lastName,
    }).then((response) => {
      console.log(response.msg);
    });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className="center">
          <Avatar className="color">
            <AccountCircleIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate className="center">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.handleInputChange}
                  autoComplete="fname"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  onChange={this.handleInputChange}
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleInputChange}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={this.handleInputChange}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              onClick={this.handleFormSubmit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submitLogin"
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <div className="signUp">
                  <Link href="/" variant="body2">
                    {"Already have an account? Sign In."}
                  </Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default Register;
