import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signin.css";
import axios from "axios";

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  render(){
    return(
      <div className="signInBox">
        <h1>Sign In</h1>
        <form>
          <TextField
            label="Email"
            type="email"
            value={this.email}
            onChange = {(event, newValue) => this.setState({email:newValue})}
          />
          <br/>
          <TextField
            label="Password"
            type={"password"}
            value={this.password}
            onChange = {(event, newValue) => this.setState({password:newValue})}
          />
          <br/>
          <br/>
          <Button
            variant="contained"
            className="signUpSubmit"
            primary={true}
            type="submit"
            onClick={(event) => this.handleClick(event)}
          >Sign In</Button>
        </form>
        <p>
          Don't have an account? <br />
          <a href="/signup">Sign Up here!</a>
        </p>
      </div>
    );
  }
}

export default SignIn;
