import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/copyright/copyright";
import "./styleLogin.css";
import API from "../../utilities/API";

class SignIn extends Component {
  state = {
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
    API.login({ email: this.state.email, password: this.state.password }).then((response) => {
      let tokenArr = response.data.token.split(" ");
      const token = tokenArr.pop().toString();
      localStorage.setItem("id_token", token);
      this.props.history.push("/home");
      // localStorage.setItem("user", JSON.stringify(response.data.user));
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
            Sign In
          </Typography>
          <form noValidate>
            <TextField
              onChange={this.handleInputChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={this.handleInputChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="rgb(97, 130, 156);" />}
              label="Remember me"
            />
            <Button
              onClick={this.handleFormSubmit}
              type="submit"
              fullWidth
              variant="contained"
              className="submitLogin"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <div className="signUp">
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}

export default SignIn;
