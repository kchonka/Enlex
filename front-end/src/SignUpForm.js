import React from "react";
import TextField from "@material-ui/core/TextField";
import "./signupform.css"

const SignUpForm = (user) => {
  return(
    <div className="signUpBox">
      <h1>Sign Up</h1>
      <form>
        <TextField
          label="First name"
          value={user.firstname}
        />
        <br/>
        <br/>
        <TextField
          label="Last name"
          value={user.lastname}
        />
        <br/>
        <br/>
        <TextField
          label="Email"
          value={user.email}
        />
        <br/>
        <br/>
        <TextField
          label="Password"
          value={user.password}
        />
      </form>
    </div>
  );
}

export default SignUpForm;
