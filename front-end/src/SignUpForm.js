import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./signupform.css";
import axios from "axios";

class SignUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    }
  }

  handleClick(event){
    let data = new FormData();
    data.append('firstname', this.state.firstname)
    data.append('lastname', this.state.lastname)
    data.append('email', this.state.email)
    data.append('password', this.state.password)
  
    axios.post("http://localhost:5000/signup", data)
    .then(function (response){
      if (response.data.code == 200)
      {
        console.log("Registration Successful")
      }
    })
    .catch(function(error){
      console.log(error);
    });
  }

  render(){
    return(
      <div className="signUpBox">
        <h1>Sign Up</h1>
        <form>
          <TextField
            label="First name"
            value={this.firstname}
            onChange = {(event, newValue) => this.setState({firstname:newValue})}
          />
          <br/>
          <TextField
            label="Last name"
            value={this.lastname}
            onChange = {(event, newValue) => this.setState({lastname:newValue})}
          />
          <br/>
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
          >Sign Up</Button>
        </form>
        <p>
          Aleady have an account? <br />
          <a href="/signin">Sign in here</a>
        </p>
      </div>
    );
  }
}

export default SignUpForm;
