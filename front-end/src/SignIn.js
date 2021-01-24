import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signin.css";
import axios from "axios";

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      isSignedUp: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit(event){
    let data = new FormData();

    data.append('email', this.state.email)
    data.append('password', this.state.password)
  
    axios.post("http://localhost:5000/signin", data)
    .then(function (response){
      if (response.data.code == 200)
      {
        this.setState({ isSignedUp: true });
        console.log("Log in successful");
      }
    })
    .catch(function(error){
      console.log(error);
    });
  }


  render(){
    if (this.state.isSignedUp){
      return <Redirect to = "http://localhost:3000/dashboard" />;
    }
    else{
      return(
        <div className="signInBox">
          <h1>Sign In</h1>
          <form>
            <TextField
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <br/>
            <TextField
              label="Password"
              type={"password"}
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br/>
            <br/>
            <Button
              variant="contained"
              className="signUpSubmit"
              primary={true}
              type="submit"
              onClick={(event) => this.handleSubmit(event)}
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
}

export default SignIn;
