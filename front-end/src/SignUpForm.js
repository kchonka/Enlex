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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name] : event.target.value})
  }

  handleSubmit(event){
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
            type="text"
            label="First name"
            name="firstname"
            value={this.state.firstname}
            onChange={this.handleChange}
            />
          <br/>
          <TextField
            type="text"
            label="Last name"
            name="lastname"
            value={this.state.lastname}
            onChange={this.handleChange}

          />
          <br/>
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
            name={"password"}
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
