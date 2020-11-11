import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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
        <TextField
          label="Last name"
          value={user.lastname}
        />
        <br/>
        <TextField
          label="Email"
          type="email"
          value={user.email}
        />
        <br/>
        <TextField
          label="Password"
          type={"password"}
          value={user.password}
        />
        <br/>
        <br/>
        <Button
          Submit
          variant="contained"
          className="signUpSubmit"
          primary={true}
          type="submit"
        >Sign Up</Button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/signin">Sign in here</a>
      </p>
    </div>
  );
}

export default SignUpForm;
